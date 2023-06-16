import { useState } from 'react'
import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function App() {
    const [newMessageText, setNewMessageText] = useState('')
    const [messages, setMessages] = useState([])

    function randomName() {
        const adjectives = ['autumn', 'hidden', 'bitter', 'misty', 'silent']
        const nouns = ['river', 'breeze', 'moon', 'rain', 'wind', 'sea']
        const adjective =
            adjectives[Math.floor(Math.random() * adjectives.length)]
        const noun = nouns[Math.floor(Math.random() * nouns.length)]
        return adjective + noun
    }

    function randomColor() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    }

    const setMessageHandler = () => {
        if (!newMessageText) return
        const msg = {
            text: newMessageText,
            member: { username: randomName(), color: randomColor() },
        }
        setMessages([...messages, msg])
    }

    return (
        <>
            <div>
                <ViewMessages messages={messages} />
                <SendMessage
                    setNewMessageText={setNewMessageText}
                    setMessageHandler={setMessageHandler}
                />
            </div>
        </>
    )
}

export default App
