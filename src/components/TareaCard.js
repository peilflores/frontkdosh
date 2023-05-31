import { eliminarTarea } from "../api/tarea_api"

export function TareaCard (props){
    const {descripcion,completed}=props.tarea

   
    return (
        <div className="flex items-center justify-between p-4 bg-state-100 border-b border-solid border-gray-300">
            <div className="flex items-center">
                {
                    completed ? (
                        <div className="bg-green-700 p-1 rounded-full cursor-pointer"> 
                            <img className="h-4 w-4" src="./check-ico.svg" alt="Check Icon" ></img>
                        </div>

                    ):(
                        <span className="border border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }

                
            
                <p className={ "pl-3" + (completed && "line-through")} >{descripcion}</p>

            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="./cerrar-ico.svg" onClick={async ()=>{

                await eliminarTarea(props.tarea.id)
                props.delete(props.tarea.id)

            }} />
            
           
        </div>
    )

}