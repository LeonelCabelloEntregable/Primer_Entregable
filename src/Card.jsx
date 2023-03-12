import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario 



const Card = ({resultado}) => {
  const styles = {
    resultContainers:{
      boxShadow: "0px 0px 5px grey",
      width: "500px" ,
      marginTop:"50px",
      padding: "10px",
  
    },
    colorContainers:{
      backgroundColor: resultado.color,
      display: "flex" ,
      color: "white",
      justifyContent: "center",

    }
  
  }  
  return (
    <div style={styles.resultContainers}>
      <h1>Hola {resultado.nombre}</h1>
      <h2>Sabemos que tu color favorito es:</h2>
      <div style={styles.colorContainers} ><p>{resultado.color}</p></div>
    </div>
  )
}

export default Card