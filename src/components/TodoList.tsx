import { UseSelector, useSelector } from "react-redux"

export function TodoList() {
    const storeTodo = useSelector(store => store.todo)
    console.log("🚀 ~ TodoList ~ storeTodo:", storeTodo)

    return (
        <div>
            <ul>
                <li>estudar</li>
                <li>café</li>
            </ul>
        </div>
    )

}