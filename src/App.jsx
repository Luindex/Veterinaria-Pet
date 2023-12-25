import { useState, useEffect } from 'react' // Import useState
import Header from './components/header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setpacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []) //array de pacientes // Inicializa vacio
  const [paciente, setpaciente] = useState({}) //Objeto paciente
  
//LocalStorage

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //si no hay nada en localStorage entonces agregale un arreglo vacio
  //     setpacientes(pacientesLS)
  //   }
  //   obtenerLS()
  // }, [])// si el [] esta vacio solo se ejecutara una


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
 }, [pacientes])//Registra los camvios en la lista de pacientes 



  //Eliminar Paciente

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setpacientes(pacientesActualizados) // array sin el paciente que eliminamos
  }


  return (
   <div className="container mx-auto mt-20">
    <Header 
    />

     <div className= "mt-12 md:flex">
     <Formulario
      pacientes = {pacientes}
      setpacientes ={setpacientes}
      paciente = {paciente} //retorna los datos al formulario
      setpaciente = {setpaciente}
     />
     <ListadoPacientes
       pacientes = {pacientes}//array
       setpaciente = {setpaciente}//obj
       eliminarPaciente = {eliminarPaciente}
     />
     </div>
    
   </div>
  )
}

export default App


/* PROPS 

los Props solo se pueden comumicar del padre al hijo

nombredelavariabla = paramerotros
*/