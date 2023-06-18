import { useEffect, useState } from 'react'
import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function App() {
    const [messages, setMessages] = useState([])
    const [member, setMember] = useState({
        username: randomName(),
        color: randomColor(),
    })
    const [drone, setDrone] = useState(
        new window.Scaledrone('Tp74Cc0xsXQT93RB', {
            data: member,
        })
    )

    useEffect(() => {
        drone.on('open', (error) => {
            if (error) {
                return console.error(error)
            }
            const member = { member }
            member.id = drone.clientId
            setMember({ member })
        })
        const room = drone.subscribe('observable-room2')
        room.on('data', (data, member) => {
            const messages = messages
            messages.push({ member, text: data })
            setMember({ messages })
        })
    }, [])

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

    function onSendMessage(newMessageText) {
        if (!newMessageText) return
        const msg = {
            text: newMessageText,
            member: { username: randomName(), color: randomColor() },
        }
        setMessages([...messages, msg])
        drone.publish({
            room: 'observable-room2',
            newMessageText,
        })
    }

    return (
        <>
            <div>
                <ViewMessages messages={messages} />
                <SendMessage onSendMessage={onSendMessage} />
            </div>
        </>
    )
}

export default App
