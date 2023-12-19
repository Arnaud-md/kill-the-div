import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const son=new Audio("/short-success-sound-glockenspiel-treasure-video-game-6346.mp3");

const Game = () => {
    const [left,setLeft]=useState(Math.random()*100);
    const [top,setTop]=useState(Math.random()*100);
    const [nbClick,setNbClick]=useState(0);
    const [_,setIntId]=useState(0);
    const [startTime,setStartTime] = useState(Date.now());
    const [doPause,setDoPause] = useState(false);
    const [date,setDate] = useState(Date.now());
    const [debut,setDebut] = useState(Date.now());
    const [acc,setAcc] = useState(0);
    const [position,setPosition] = useState({});
    const [latitude,setLatitude] = useState({});
    const [longitude,setLongitude] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        
        setInterval(()=>setIntId(Math.random()),120);
        
    },[]);

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
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                  new Notification('coucou', { body: 'toto'})
                }
            });
            // navigate('/end');
        }
    },[nbClick]);
    const handleRegame = useCallback(async()=> {
        // left = Math.random()*100;
        // top = Math.random()*100;

        setLeft(Math.random()*100);
        setTop(Math.random()*100);
        setNbClick(0);
    },[]);
    const handleClickPause = useCallback(()=>{
        setDoPause(!doPause);
        // setDate(Date.now());
        if(!doPause) {
            setDebut(Date.now());
        }
        if(doPause) {
            setAcc(acc+Date.now()-debut);
        }
        //setStartTime(startTime+Date.now()-date);

    },[doPause,date,startTime])
    const getPosition = (()=>{
        navigator.geolocation.getCurrentPosition((position)=> {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    })
    getPosition();
    console.log("doPause :", doPause);
    console.log("secondes : ",(Date.now() - startTime)/1000);
    console.log("latitude : ",latitude);
    console.log("longitude : ",longitude);
    return (
        <div className="game">
            <div className="compteur">
                <p className="score">Nombre de div cliquées : {nbClick} / 10</p>
                {/* <p className="score">Time : {!doPause ? (Date.now() - startTime)/1000 : (date-startTime)/1000 } s</p> */}
                <p className="score">Time : {doPause ? (acc+Date.now()-debut)/1000 : (acc)/1000 } s</p>
            </div>
            {nbClick!==10 ?
            <div onClick={handleClick} className="round" style={{top: top + "%", left:left + "%"}}></div> :
            <div className="end">
                <p>Fin de partie</p>
                <button onClick={handleRegame}>Rejouer</button>    
            </div>}
            <div>
                <button className="pause" onClick={handleClickPause}>Pause</button>
            </div>
        </div>
    )
}

export default Game;