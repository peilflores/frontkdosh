import axios from 'axios'
export const getTarea = () => {
    return axios.get('http://127.0.0.1:8000/tarea/')

}

export const crearTarea = (tarea) =>{
    return axios.post('http://127.0.0.1:8000/tarea/', tarea)
}

export const eliminarTarea=(id) =>{

    return axios.delete(`http://127.0.0.1:8000/tarea/${id}`)
}