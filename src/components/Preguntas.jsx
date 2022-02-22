import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Header2 from "./Header2";
import Navbar from "./Navbar";
import "./Preguntas.css";
import logo from "../components/Img/avatar.png";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import Temporizador from "./Temporizador";
import { message, Modal } from 'antd';
import { ArrowLeftOutlined} from '@ant-design/icons';

const Preguntas = () => {
  const [level, setLevel] = useState(1);
  const [timer, setTimer] = useState(false);

  const { state } = useLocation();
  let { username } = useParams();
  const navigate = useNavigate();

  console.log(state.play);
  let respuestas = [];
  let aleatorio = [];
  let numero = "";

  if (state.play[level - 1].type == "multiple") {
    respuestas = [
      state.play[level - 1].correct_answer,
      state.play[level - 1].incorrect_answers[0],
      state.play[level - 1].incorrect_answers[1],
      state.play[level - 1].incorrect_answers[2],
    ];

    for (var j = 0; j < 4; j++) {
      numero = Math.floor(Math.random() * (4 - 0) + 0);
      if (!aleatorio.includes(numero)) {
        aleatorio[j] = numero;
      } else {
        j--;
      }
    }
  } else {
    respuestas = [
      state.play[level - 1].correct_answer,
      state.play[level - 1].incorrect_answers[0],
    ];

    for (var i = 0; i < 2; i++) {
      numero = Math.floor(Math.random() * (2 - 0) + 0);
      if (!aleatorio.includes(numero)) {
        aleatorio[i] = numero;
      } else {
        i--;
      }
    }
  }

  function handlerClick (e) {
    if (e.target.value === state.play[level - 1].correct_answer ){
      if(e.target.id === "primeraMultiple"){document.getElementById("primeraMultiple").className = "preguntaGanadora";}
      if(e.target.id === "segundaMultiple"){document.getElementById("segundaMultiple").className = "preguntaGanadora";}
      if(e.target.id === "terceraMultiple"){document.getElementById("terceraMultiple").className = "preguntaGanadora";}
      if(e.target.id === "cuartaMultiple"){document.getElementById("cuartaMultiple").className = "preguntaGanadora";}
      if(e.target.id === "primeraBoolean"){document.getElementById("primeraBoolean").className = "preguntaGanadora";}
      if(e.target.id === "segundaBoolean"){document.getElementById("segundaBoolean").className = "preguntaGanadora";}
      
      message.success({
        content: 'Felcitaciones!! Has ganado y subes al siguiente nivel',
      });
      setTimer(false);
      setTimeout(function(){
       document.getElementById(e.target.id).className = "btn-preguntas";
        setLevel(level+1)
        if(level==10){
          Modal.success({
            content: "Felicitaciones!!, Ahora eres millonario y te llevas un total de: 47.000",
          });
          navigate('/');
        }
    },5000);
    
    }else{
      if(e.target.id === "primeraMultiple"){document.getElementById("primeraMultiple").className = "preguntaPerdedora";}
      if(e.target.id === "segundaMultiple"){document.getElementById("segundaMultiple").className = "preguntaPerdedora";}
      if(e.target.id === "terceraMultiple"){document.getElementById("terceraMultiple").className = "preguntaPerdedora";}
      if(e.target.id === "cuartaMultiple"){document.getElementById("cuartaMultiple").className = "preguntaPerdedora";}
      if(e.target.id === "primeraBoolean"){document.getElementById("primeraBoolean").className = "preguntaPerdedora";}
      if(e.target.id === "segundaBoolean"){document.getElementById("segundaBoolean").className = "preguntaPerdedora";}
      message.error({
        content: `Respuesta incorrecta, la Respuesta correcta era: ${state.play[level - 1].correct_answer} Esperamos que vuelvas pronto!!`,
        duration: 4,
      });
      setTimeout(function(){
          document.getElementById(e.target.id).className = "btn-preguntas";
          navigate('/');
        }
    ,5000);
    }
  }

  function handler () {
    navigate('/');
  }

  return (
    <div>
      <ArrowLeftOutlined style={{fontSize: '25px'}} onClick={handler}/>
      <Header2 name={username} level={level} difficulty={state.play[1].difficulty}/>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <Navbar level={level} />
            </td>
            <td>
             
             {timer == true ? <div> <Row>
               <Col>
                 <div className="container" style={{ margin: "20px" }}>
                     <Temporizador setTimer={setTimer} respuesta={state.play[level - 1].correct_answer}/>
                 </div>
               </Col>
             </Row>
             <Row>
               <Col>
                 <div className="container" style={{ margin: "20px" }}>
                   <label className="pregunta">
                     {state.play[level - 1].question}
                   </label>
                 </div>
               </Col>
             </Row></div> :<div className="container" style={{ margin: "20px" }}><Button className="bnt-empezar" size="lg" onClick={()=>setTimer(true)}>
                        Empezar nivel {level}
                      </Button></div>}
           
             {state.play[level - 1].type == "boolean" ? (
               <div>
                 <Row>
                   <Col>
                     <div className="container" style={{ margin: "5px" }}>
                       <Button id="primeraBoolean" className="btn-preguntas" value={respuestas[aleatorio[0]]} onClick={handlerClick}>
                         {respuestas[aleatorio[0]]}
                       </Button>
                     </div>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <div className="container" style={{ margin: "5px" }}>
                       <Button id="segundaBoolean" className="btn-preguntas" value={respuestas[aleatorio[1]]} onClick={handlerClick}>
                         {respuestas[aleatorio[1]]}
                       </Button>
                     </div>
                   </Col>
                 </Row>
               </div>
             ) : (
               <div>
                 <Row>
                   <Col>
                     <div className="container" style={{ margin: "5px" }}>
                       <Button id="primeraMultiple" className="btn-preguntas" value={respuestas[aleatorio[0]]} onClick={handlerClick}>
                         {respuestas[aleatorio[0]]}
                       </Button>
                       <Button id="segundaMultiple" className="btn-preguntas" value={respuestas[aleatorio[1]]} onClick={handlerClick}>
                         {respuestas[aleatorio[1]]}
                       </Button>
                     </div>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <div className="container" style={{ margin: "5px" }}>
                       <Button id="terceraMultiple" className="btn-preguntas" value={respuestas[aleatorio[2]]} onClick={handlerClick}>
                         {respuestas[aleatorio[2]]}
                       </Button>
                       <Button  id="cuartaMultiple" className="btn-preguntas" value={respuestas[aleatorio[3]]} onClick={handlerClick}>
                         {respuestas[aleatorio[3]]}
                       </Button>
                     </div>
                   </Col>
                 </Row>
               </div>
             )}
           </td>
            
            <td>
              <Row>
                <Col>
                  <div className="container" style={{ margin: "5px" }}>
                    <img className="image" src={logo} alt="logocadenanuaio" />
                  </div>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
};

export default Preguntas;
