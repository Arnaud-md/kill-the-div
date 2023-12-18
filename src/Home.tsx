import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = useCallback(async()=> {
            navigate('/game');
    },[]);
    return (
        <div className="first_div">
            <button onClick={handleClick}>Start</button>
        </div>
    )
}

export default Home;