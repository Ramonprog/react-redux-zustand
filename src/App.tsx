import { Provider as ReduxProvider } from 'react-redux'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { store } from './store'

function App() {

  return (
    <div>
      <ReduxProvider store={store}>
        <AddTodo />
        <TodoList />
      </ReduxProvider>

    </div>
  )
}

export default App
