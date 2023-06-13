import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function App() {
    return (
        <>
            <div>
                <ViewMessages />
                <SendMessage />
            </div>
        </>
    )
}

export default App
