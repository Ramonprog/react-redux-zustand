import { FormEvent, useRef } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store";

export function AddTodo() {
    const dispatch = useDispatch()
    const newTodoRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (newTodoRef.current) {
            dispatch(addTodo(newTodoRef.current.value))
            newTodoRef.current.value = '';
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="novo to-do" name='new todo' ref={newTodoRef} />
            <button type="submit">Adicionar</button>
        </form>
    )
}