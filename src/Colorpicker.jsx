import React, {useState} from "react";
function Colorpicker (){
    const [color, setcolor] = useState("#FFFFFF");
    function choosecolor(event){
        setcolor(event.target.value);
    }
    return(
        <div className="fst">
            <h1>Color Picker</h1>
            <div className="snd" style={{backgroundColor:color}}>
                <h1>Selected Color : {color}</h1>
            </div>
            <label className="srd">Choose a Color:</label>
            <input type="color" value={color} onChange={choosecolor}/>

        </div>
    );

}
export default Colorpicker
