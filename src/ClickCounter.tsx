import { useState } from 'react'

export const ClickCounter = () => {
    const [clicks, setClicks] = useState(0)

    function onClickHandler() {
        setClicks((old) => old + 1)
    }

    const name = 'asdasd'

    return (
        <div className="click-container">
            <p>Clicked : {clicks}</p>
            <button onClick={onClickHandler}>Click Me !</button>
        </div>
    )
}
