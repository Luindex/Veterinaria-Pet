import {useState, useEffect} from 'react';
import Error from './error'; //Componente de Error Html



const Formulario = ({pacientes, setpacientes, paciente, setpaciente}) => {

    const [nombre, setNombre] = useState('');
    const [Propietario, setPropietario] = useState('');
    const [Email, setEmail] = useState('');
    const [fecha, setfecha] = useState('');
    const [Sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false) // inicializamos en false

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.Propietario)
            setEmail(paciente.Email)
            setfecha(paciente.fecha)
            setSintomas(paciente.Sintomas)
        }
    }, [paciente]) // dejamos de propagar en consola el obj, solo hasta que cliente(obj) llegue ahi si se imprime


    

    const generateID = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion del Formulario(Para que todos los espacios esten llenos)
        if([nombre, Propietario, Email, fecha, Sintomas].includes('')){
            setError(true) // se cambia a true
            return;
        } 

        setError(false) //no volver a mostrar el error


        //objeto de paciente
        const objetoPaciente = {
            nombre,
            Propietario,
            Email,
            fecha,
            Sintomas,
        }

        if(paciente.id){
            //Editando El registro
            objetoPaciente.id = paciente.id
        
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setpacientes(pacientesActualizados) // Array
            setpaciente({})//Limpiamos el paciente en el State

        }else {
            //Nuevo Paciente
            objetoPaciente.id = generateID()
            setpacientes([...pacientes, objetoPaciente]) //pasamos el obj a la copia array de pacientes
            //[...pacientes] asi traemos una copia , y le pasamos un objeto paciente

        }

        //REINICIAR AL FORMULARIo/////
        setNombre('')
        setPropietario('')
        setEmail('')
        setfecha('')
        setSintomas('')
    
    }
    
    return(
    
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">
                Añade Pacientes Y <span className="text-indigo-600 font-bold" font-bold >
                     Administralos </span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 ml-8 mb-10" >
           {error && 
            <Error><p>Todos los Campos Son Obligarios</p></Error> // Usamos el error importado
           //Children
           } 
             
            <div className="mb-5">
                <label  htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota
                </label>

                <input 
                 id="Mascota" //Es para enlasar el label con el input
                 type="text" 
                 placeholder="Nombre de la Mascota"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={nombre}
                 onChange={ (e) => setNombre(e.target.value)}
                 />
            </div>

            
            <div className="mb-5">
                <label  htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
                    Nombre Propietario
                </label>

                <input 
                 id="Propietario" //Es para enlasar el label con el input
                 type="text" 
                 placeholder="Nombre del Propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={Propietario}
                 onChange={ (e) => setPropietario(e.target.value)}
                 />
            </div>

            <div className="mb-5">
                <label  htmlFor="Email" className="block text-gray-700 uppercase font-bold">
                    Email
                </label>

                <input 
                id="Email" //Es para enlasar el label con el input
                type="email" 
                 placeholder="Email Contacto Propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={Email}
                 onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label  htmlFor="Date" className="block text-gray-700 uppercase font-bold">
                    Alta
                </label>

                <input 
                id="Date" //Es para enlasar el label con el input
                type="date" 
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 value={fecha}
                 onChange={ (e) => setfecha(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label  htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
                Sintomas
                </label>
                   
                <textarea id="Sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe los Sintomas de la Mascota"
                value={Sintomas}
                 onChange={ (e) => setSintomas(e.target.value)}></textarea>
                
            </div>

            <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value= {paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}/>

            </form>
        </div>
        
    )

}

export default Formulario // Export fnt