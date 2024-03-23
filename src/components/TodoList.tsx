import { useAppSelector } from "../store"

export function TodoList() {
    const storeTodo = useAppSelector(store => store.todo)
    console.log("🚀 ~ TodoList ~ storeTodo:", storeTodo)

    return (
        <div>
            <ul>
                {storeTodo.map(todo => <p>{todo}</p>)}
            </ul>
        </div>
    )

}