import { useForm } from "react-hook-form";
import { crearTarea, getTarea, eliminarTarea } from "../api/tarea_api";
import { useState } from "react";

export function TareaForm(props){
    const [descripcion, setDescripcion]= useState('')
    
    const handleSubmit = (e)=>{
        if (e.key.toLowerCase() === 'enter'){
            const data = { descripcion };

            const res= crearTarea(data)
            .then(
                res => {
                    props.agregarTarea(res.data)
                }
                
                );
            
            setDescripcion('')
            
    } 
   
}
    

    return (

        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full" ></span>
            </div>
            <input type="text" 
            className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-state-100 rounded-xl outline-none transition-all duration-300 ease-in-out" 
            placeholder="Tarea"
            value={descripcion}
            onChange={e=>setDescripcion(e.target.value)}
            onKeyDown={e=>handleSubmit(e)}
            />

            
            
        </div>
    )

}