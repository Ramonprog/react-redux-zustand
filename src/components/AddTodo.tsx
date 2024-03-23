import { FormEvent, useRef } from "react"

export function AddTodo() {

    const newTodoRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (newTodoRef.current) {
            console.log(newTodoRef.current.value);
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