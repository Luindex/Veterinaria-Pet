
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setpaciente, eliminarPaciente}) => {
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            
            {pacientes && pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado De Pacientes</h2>
                 <p className="text-xl mt-5 mb-10 text-center">
                     Administra Tus {''}
                     <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                 </p>
     
     
                 {pacientes.map(paciente => (  
                     <Paciente 
                     key={paciente.id} // codigo unico para paciente
                     paciente = {paciente}
                     setpaciente = {setpaciente}
                     eliminarPaciente = {eliminarPaciente}
                     />
                 ))}
            </>
                //Cuando hay al menos Un paciente 

            ) : (
                <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                 <p className="text-xl mt-5 mb-10 text-center">
                     Comienza Agregando Pacientes {''}
                     <span className="text-indigo-600 font-bold">Y apareceran En este Lugar</span>
                 </p>
                
                </>

                //Cuando no hay ningun Paciente
            )}
            
            
           
           
           
            
        </div>
    )

}
export default ListadoPacientes //Export ftn