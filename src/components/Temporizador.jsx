import React, { useRef, useEffect, useState } from "react";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Temporizador.css'


export default function Countdown( {setTimer,respuesta}) {
  const [num, setNum] = useState(30);
  const navigate = useNavigate();
  // const [pause, setPause] = useState(false);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    if (num == 0) {
      message.error({
        content: `TIME OUT, la respuesta correcta era: ${respuesta} Esperamos que lo intentes pronto nuevamente!!`,
        duration: 4,
      });
      navigate('/');
      //setTimer(false)
      //return;
     }
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [num]);
  
  return (
    <div>
      <div className="timer">{num}</div>
    </div>
  );
}