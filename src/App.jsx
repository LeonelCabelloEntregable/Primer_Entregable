import {useState} from "react";
import Card from "./Card";


//Aqui deberias escribir tus funciones de validacion


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

const handleSubmit = (e) => { 
  e.preventDefault()
if(nombre.length<3 || nombre[0]===" " ) { 
  console.log("Chequear que la informacion sea correcta")
setError (true)

 }
else{
setError(false)
setResultado({nombre:nombre, color:color})
}
}

const [nombre, setNombre] = useState("")
const[color, setColor]=useState("")
const[error, setError]= useState(false)
const[resultado, setResultado]=useState(null)

const styles = {
  formContainers:{
    boxShadow: "5px 5px 0px grey",
    width: "500px" ,
    marginTop:"50px",
    padding: "10px",
    borderRadius:"5px",
    backgroundColor:"#D5833A",
    display: "flex",
    flexDirection: "column",
    gap: "15px",



  },


  inputContainers : {
    padding: "5px",
    borderRadius:"5px",


  }

}  

  return (
    <div className="App" style={{padding: "10vh 20vw" }}>
     <h1>Elige tu Color</h1>
     <form onSubmit={(e)=>handleSubmit(e)} style={styles.formContainers}>
      {/* aqui deberias comenzar a escribir tu codigo */}

    
      <input style={styles.inputContainers} type="text" name="" id="" placeholder="Ingrese su Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value) }  />


      <input style={styles.inputContainers} type="text" placeholder="Ingrese el color en HEX" value={color} onChange={(e)=>setColor(e.target.value)}/>

      <input style={styles.inputContainers} type="submit"/>

     </form>
     

     {error && <h2>Por favor chequea que la información sea correcta</h2> }
     {resultado &&  !error   && <Card resultado={resultado}/> }

    </div>
  );
}

export default App;
