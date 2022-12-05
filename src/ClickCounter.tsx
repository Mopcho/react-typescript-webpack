import { useState } from "react"

export const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);

    function onClickHandler() {
        setClicks(old => clicks + 1);
    }

    return (
        <div className="click-container">
            <p>Clicked : {clicks}</p>
            <button onClick={onClickHandler}>Click Me !</button>
        </div>
    )
}