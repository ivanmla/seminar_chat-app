import { useState } from 'react'
import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function App() {
    const [newMessage, setNewMessage] = useState(null)
    const [messages, setMessages] = useState([])

    // temporary, for rendering messages in View:
    const setTestMessageHandler = () => {
        setMessages([
            {
                text: 'First message text',
                member: {
                    color: 'blue',
                    username: 'first username',
                },
            },
            {
                text: 'Second message text',
                member: {
                    color: 'red',
                    username: 'second username',
                },
            },
        ])
    }

    return (
        <>
            <div>
                <ViewMessages messages={messages} />
                <SendMessage
                    setNewMessage={setNewMessage}
                    setTestMessageHandler={setTestMessageHandler}
                />
            </div>
        </>
    )
}

export default App
