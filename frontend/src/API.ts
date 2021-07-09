import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
    try{
        const todos = await axios.get('/api/todos')
        return todos
    } catch(err) {
        console.error(`GET /api/todos ERR: ${err}`)
        throw new Error(err)
    }
}

const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    try{
        const newTodo = {
            ...todoBody,
            status: false
        }
        const todo = await axios.post('/api/todos', newTodo)
        return todo
    } catch(err) {
        console.error(`POST /api/todos ERR: ${err}`)
        throw new Error(err)
    }
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    try{
        const newTodo = {
            ...todoBody,
            status: true
        }
        const todo = await axios.put(`/api/todos/${todoBody._id}`, newTodo)
        return todo
    } catch(err) {
        console.error(`PUT /api/todos/${todoBody._id} ERR: ${err}`)
        throw new Error(err)
    }
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
    try{
        const todo = await axios.delete(`/api/todos/${id}`)
        return todo
    } catch(err) {
        console.error(`DELETE /api/todos/${id} ERR: ${err}`)
        throw new Error(err)
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
