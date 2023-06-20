import { Component } from 'react'
import './App.css'
import SendMessage from './components/SendMessage'
import ViewMessages from './components/ViewMessages'

function randomName() {
    const adjectives = ['autumn', 'hidden', 'bitter', 'misty', 'silent']
    const nouns = ['river', 'breeze', 'moon', 'rain', 'wind', 'sea']
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return adjective + noun
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
}

class App extends Component {
    state = {
        messages: [],
        member: {
            username: randomName(),
            color: randomColor(),
        },
    }

    constructor() {
        super()
        {
            console.log('constructor called')
        }
        this.drone = new window.Scaledrone(
            import.meta.env.VITE_SCALEDRONE_CHANNEL_ID,
            {
                data: this.state.member,
            }
        )
        {
            console.log('drone created')
        }
    }

    render() {
        this.openDroneAndRoom()
        console.log('render App called')
        return (
            <>
                <div>
                    <ViewMessages messages={this.state.messages} />
                    <SendMessage onSendMessage={this.onSendMessage} />
                </div>
            </>
        )
    }

    openDroneAndRoom = () => {
        this.drone.on('open', (error) => {
            if (error) {
                return console.error(error)
            }
            const member = { ...this.state.member }
            member.id = this.drone.clientId
            this.setState({ member })
        })
        const room = this.drone.subscribe('observable-room1')
        room.on('data', (data, member) => {
            const messages = this.state.messages
            messages.push({ member, text: data })
            this.setState({ messages })
        })
    }

    onSendMessage = (message) => {
        if (!message) return
        this.drone.publish({
            room: 'observable-room1',
            message,
        })
    }
}

export default App
