// funciones que van a consultar al backend todas las consultas

// const API = 'http://192.168.1.12:3000/tasks'
const API = 'https://baquend.alwaysdata.net/tasks'

//obtener todos los task
export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}

//obtener un task, para editarlo
export const getTask = async (id) => {
    const res = await fetch(`${API}/${id}`)
    return await res.json()
}

export const addTask = async (task) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return await res.json()
}

export const deleteTask = async (id) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'DELETE'
    })
    // return await res.json() //por tabnine
}

export const editTask = async (id, task) => {
    //console.log("id: ",id,", task: ",task)
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    //return await res.json()
    return res
}
