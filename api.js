// funciones que van a consultar al backend

const API = 'http://192.168.1.12:3000/tasks'

export const getTasks = async () => {
    const res = await fetch(API)
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