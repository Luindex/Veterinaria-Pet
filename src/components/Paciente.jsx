import { MagicMotion } from "react-magic-motion"

const Paciente = ({paciente, setpaciente, eliminarPaciente}) => {


    // useEffect(() => {
    //     console.log('El componente esta listo')
    // }, []) // solo se va a imprimir si envia al array de pacientes


   const {nombre, Propietario, Email, fecha, Sintomas, id } = paciente

   const handleEliminar = () => {
    const respuesta = confirm(`Deseas Eliminar a ${nombre} de la Lista de Pacientes ?`)

    if(respuesta){
        eliminarPaciente(id)
    }
   }
    
  return (
    <MagicMotion> 
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className=" font-bold mb-3 text-gray-700 uppercase ">Nombre: 
        <span className=" font-normal normal-case"> {nombre}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase ">Propietario: 
        <span className=" font-normal normal-case"> {Propietario}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase ">Email: 
        <span className=" font-normal normal-case"> {Email}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase ">Fecha de Alta: 
        <span className=" font-normal normal-case"> {fecha}</span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase ">Sintomas: 
        <span className=" font-normal normal-case"> {Sintomas}</span>
    </p>

    <div className=" flex justify-between mt-10">
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
        onClick={() => setpaciente(paciente) } //le pasamos el obj paciente
        
        >
           Editar 
        </button>

        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg cursor-pointer transition-all"
        onClick={handleEliminar}>
           Eliminar
        </button>
    </div>

</div> </MagicMotion>
    
  )
}

export default Paciente
