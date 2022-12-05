import './styles.css';
import IMAGE from './image.png';

export const App = () => {
    return (
        <>
            <h1>This is an App!</h1>
            <img src={IMAGE} width="300" height="200"></img>
        </>
    );
}