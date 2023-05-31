
import { TareaCard } from "./TareaCard"

export function Tareas(props){

    return <div>
        {
        
        props.tarea.map (tarea =>(
           <TareaCard key={tarea.id} tarea={tarea} delete={props.eliminaTarea}  />
        ))}
    </div>
}