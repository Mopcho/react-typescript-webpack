import './styles.css'
import IMAGE from './bugpng.png'
import { ClickCounter } from './ClickCounter'

export const App = () => {
    let asdas = 'asdasd'
    return (
        <>
            <div className="container">
                <h1>ERROR : THERE IS A BUG IN THIS APP !</h1>
                <img src={IMAGE} width="300" height="200" alt=""></img>
            </div>
            <ClickCounter></ClickCounter>
            {/* <img src={SVG} width="300" height="200"></img> */}
        </>
    )
}
