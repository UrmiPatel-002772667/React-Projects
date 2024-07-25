import { useState } from "react";
import Output from "./Output";
 const Greeting = () => {
    const [changedText, setChangedText] = useState();
    const changeTextHadler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's Good to See You!!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHadler}>Change Text!</button>
        </div>
    )
}

export default Greeting;