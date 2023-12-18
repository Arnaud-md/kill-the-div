import { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const End = () => {
    const navigate = useNavigate();
    const handleClickReplay = useCallback(async()=> {
        navigate('/game');
    },[]);      
    return (
        <div className="end_page">
            <p>Fin de partie</p>
            <button onClick={handleClickReplay}>Rejouer</button>
        </div>
    )
}

export default End;