
import { AccountBookFilled } from "@ant-design/icons/lib/icons";
import React, { useEffect,useState } from "react";
import './Header2.css'

const Header2 = ({name,level,difficulty}) => {
 
  const [acumulador,setAcumulador] = useState((0)); 
 
   useEffect(() => {
    updateValue();
    
  }, [level]);

   function updateValue()  {
     
     if (level == 2){
     
     setAcumulador(1000 );
      return acumulador;
     }if (level == 3){
    
     setAcumulador(3000 );
      return acumulador;
     } 
     if (level == 4){
    
     setAcumulador(7000 );
      return acumulador;
     } 
     if (level == 5){

     setAcumulador(11000 );
      return acumulador;
     } 
     if (level == 6){
    
     setAcumulador(16000 );
      return acumulador;
     } 
     if (level == 7){
    
     setAcumulador(22000 );
      return acumulador;
     } 
     if (level == 8){
    
     setAcumulador(29000 );
      return acumulador;
     } if (level == 9){
   
     setAcumulador(37000 );
      return acumulador;
     } if (level == 10){
 
     setAcumulador(47000 );
      return acumulador;
     }  

     
   }

    return (
<div className="heder">

  <label>USUARIO: </label>
  <input type="text" className="impUsuario" defaultValue={name}/>
  <label className="lanivel">NIVEL: </label>
  <input type="text" className="imNivel" defaultValue={difficulty}/>
  <label className="laganancia"> GANANCIA:<b> {acumulador} </b></label>
 
</div>
    );
}

export default Header2;