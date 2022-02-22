import React, { useState } from "react";
import getAxios from "./Axios";
import "./Iniciar.css";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import { categories } from "./Categories";



const Iniciar = () => {
  const [play, setPlay] = useState([]);
  const navigate = useNavigate();

  
  var URL = "";

  const [data, setData] = useState({
    name: null,
    categories: null,
    dificulty: null,
  });

  const estado = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handler = (e) => {
    if (
      data.name === null ||
      data.dificulty === null ||
      data.categories === null
    ) {
      let config = {
        content: "Favor llenar todos los campos",
        duration: 2,
      };
      message.error(config);
    } else {
      URL = `https://opentdb.com/api.php?amount=10&category=${data.categories}&difficulty=${data.dificulty}`;
      try {
        getAxios(URL).then((data) => {
          
          if (data.state === "success") {
            setPlay(data.response.results)
          } else {
            let config = {
              content: "Error de procesamiento",
              duration: 2,
            };
            message.error(config);
          }
        });
      } catch (er) {
        console.log(er);
        let config = {
          content: "Error de procesamiento",
          duration: 2,
        };
        message.error(config);
      }
     
    }
  };
 
  if(play.length>0){
    navigate(`/preguntas/${data.name}`,{state: {play}});
  }
  
  
  return (
    <div>
      <label className="lausuario">USUARIO: </label>
      <input name="name" className="usuario" type="text" onChange={estado} />

      <label className="lausuario1">CATEGORIA: </label>
      <select name="categories" className="categoriacs" onChange={estado}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label className="lausuario1">DIFICULTAD: </label>
      <select name="dificulty" className="dificualtacss" onChange={estado}>
        <option key="0" value={null}>
          select
        </option>
        <option key="1" value="easy">
          easy
        </option>
        <option key="2" value="medium">
          medium
        </option>
        <option key="3" value="hard">
          hard
        </option>
      </select>
      <button  className="button" onClick={() => handler()}>
        Ingresar
      </button>
    </div>
  );
};

export default Iniciar;
