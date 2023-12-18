import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const son=new Audio("/short-success-sound-glockenspiel-treasure-video-game-6346.mp3");

const Game = () => {
    const [left,setLeft]=useState(Math.random()*100);
    const [top,setTop]=useState(Math.random()*100);
    const [nbClick,setNbClick]=useState(0);
    const [_,setIntId]=useState(0);
    const [startTime] = useState(Date.now())

    const navigate = useNavigate();

    useEffect(()=>{
        setInterval(()=>setIntId(Math.random()),120)
    },[])

    const handleClick = useCallback(()=> {
        // left = Math.random()*100;
        // top = Math.random()*100;
        setLeft(Math.random()*100);
        setTop(Math.random()*100);
        setNbClick(nbClick+1);
        navigator.vibrate([200]);
        son.pause()
        son.currentTime = 0
        son.play();

        if (nbClick===9) {
            navigate('/end');
        }
    },[nbClick]);
    const handleRegame = useCallback(async()=> {
        // left = Math.random()*100;
        // top = Math.random()*100;

        setLeft(Math.random()*100);
        setTop(Math.random()*100);
        setNbClick(0);
    },[]);     
    return (
        <div className="game">
            <div className="compteur">
                <p className="score">Nombre de div cliquées : {nbClick} / 10</p>
                <p className="score">Time : {(Date.now() - startTime)/1000} s</p>
            </div>
            {nbClick!==10 ?
            <div onClick={handleClick} className="round" style={{top: top + "%", left:left + "%"}}></div> :
            <div className="end">
                <p>Fin de partie</p>
                <button onClick={handleRegame}>Rejouer</button>    
            </div>}
        </div>
    )
}

export default Game;