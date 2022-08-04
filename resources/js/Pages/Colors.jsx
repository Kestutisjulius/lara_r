import {useEffect, useState} from "react";

function Colors({niceColors, saveUrl}){

        const [colors, setColors] = useState(null);
        const [color, setColor] = useState(['#00ff09']);

    const save = () => {
        if (null !== colors) {
            axios.post(saveUrl, colors)
                .then(res => console.log(res));
        }
    }

        useEffect(()=> {
            setColors(niceColors);
        }, []);

        useEffect(()=> {
            const timerId = setInterval(()=>{
                    save();
            }, 200000);
            return ()=>clearInterval(timerId);
        }, [save]);

        const add = () =>{
            setColors(c => [...c, color]);
        }


    return (
        <>
        <div className="color"> I'm COLOR</div>
            <ul className="ex">
            {
                colors?.map((color, ke)=><li className="rect" key={ke} style={{backgroundColor: color}}>{color}</li>)
            }
            </ul>
            <div className="ex">
                <input className="clr" type="color" value={color} onChange={event => setColor(event.target.value)}></input>
            </div>
            <div className="ex">
            <button className="btn" onClick={add}>ADD []</button>
                <button className="btn" onClick={save}>Save</button>
            </div>
        </>
    )
}
export default Colors;
