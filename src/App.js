
import { useEffect, useState } from "react"
import { getTarea } from "./api/tarea_api";
import { TareaForm } from "./api/TareaForm";
import { Tareas } from "./components/Tareas";
import { FiltrarTodo } from "./components/TareaFiltro";
function App(){

  const [tarea, setTarea] = useState([])
    useEffect (() =>{

       async function CargarTarea(){
        const res = await getTarea()
        setTarea(res.data)
       }
       CargarTarea();

    }, [])

  const agregarTarea = (tareas) =>{
    setTarea([
      ...tarea,tareas
    ])
  }

  const eliminaTarea =(id) =>{

    const arrayFiltrado = tarea.filter(tareas => tareas.id !== id)
    setTarea(arrayFiltrado)

  }


  return (
    <div className="bg-stone-200 min-h-screen  flex items-center justify-center">
      
            <div className="container flex flex-col max-w-xl">
            <h1 className="text-5xl text-red-300 font-bold tracking-widest ">Todos</h1>
                <TareaForm agregarTarea={agregarTarea} />
                <Tareas tarea={tarea} eliminaTarea={eliminaTarea} />
                <FiltrarTodo></FiltrarTodo>
            </div>
     
    </div>
    
   
  )

}

export default App