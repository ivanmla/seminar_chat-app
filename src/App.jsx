import { useState } from 'react'
import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function App() {
    const [newMessage, setNewMessage] = useState(null)

    return (
        <>
            <div>
                <ViewMessages />
                <SendMessage setNewMessage={setNewMessage} />
                {console.log(
                    'App rendered, newMessage: ' + JSON.stringify(newMessage)
                )}
            </div>
        </>
    )
}

export default App
