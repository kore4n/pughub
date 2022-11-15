import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageOpening from '../components/page-opening'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PageBody from '../components/page-body'
import PageHeading from '../components/page-heading'
import ClassQueue from '../components/class-queue'
import ClassQueueHeading from '../components/class-queue-heading'
import ClassIsQueued from '../components/class-is-queued'

import { useState } from 'react'
import { useEffect } from 'react'
import io from "Socket.IO-client"
let socket;

const Home = () => {
  const [input, setInput] = useState(false)
  const [playersQueued, setPlayersQueued] = useState(["Bunny", "Kitty", "Doggy"]);

  useEffect(() => {socketInitializer()})

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io()

    socket.on('connect', () => {
      console.log('connected mm')
    })

    socket.on('update-input', msg => {
      console.log("Updating input")
      setInput(msg)
    })

    socket.on('queue-input', msg => {
      console.log(msg)
      setPlayersQueued(msg)
    })
  }

  const onChangeHandler = (e) => {
    setInput(e.target.checked)
    const newPlayersQueued = [...playersQueued, "new one"]
    setPlayersQueued(newPlayersQueued)
    
    socket.emit('input-change', e.target.checked)
    socket.emit('queue-change', newPlayersQueued)
  }

  return (
    <div>
      <Head>
        <title>About Section</title>
        <meta name="Homepage" content="Pughub home" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <PageBody>
        <div className=' p-10 min-h-screen flex flex-col gap-10'>
          <div className=' flex-1 flex content-center max-h-10 divide-x divide-solid divide-white'>
            <div className='flex-1 text-center m-auto'>
              Captains
              <div>
                0/2
              </div>
            </div>
            <div className='flex-1 text-center m-auto'>
              Players
              <div>
                0/12
              </div>
            </div>
            <div className='flex-1 text-center m-auto'>
              Roles
              <div>
                0/6
              </div>
            </div>
          </div>
          {/* Holds all class queue columns */}
          <div className='flex '>
            <ClassQueue playersQueued={playersQueued}>
              <ClassQueueHeading
                image={"/images/scoutemblem.png"}
                alt={"scout emblem"}
                input={input}
                title={"Pocket Scout"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
            <ClassQueue>
            <ClassQueueHeading
                image={"/images/scoutemblem.png"}
                alt={"scout emblem"}
                input={input}
                title={"Flank Scout"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
            <ClassQueue>
            <ClassQueueHeading
                image={"/images/soldieremblem.png"}
                alt={"soldier emblem"}
                input={input}
                title={"Pocket Soldier"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
            <ClassQueue>
            <ClassQueueHeading
                image={"/images/soldieremblem.png"}
                alt={"soldier emblem"}
                input={input}
                title={"Roaming Soldier"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
            <ClassQueue>
            <ClassQueueHeading
                image={"/images/demomanemblem.png"}
                alt={"demoman emblem"}
                input={input}
                title={"Demoman"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
            <ClassQueue>
            <ClassQueueHeading
                image={"/images/medemblem.png"}
                alt={"medic emblem"}
                input={input}
                title={"Medic"}
                onChangeHandler={onChangeHandler}/>
            </ ClassQueue>
          </div>
        </div>
        <Footer />
      </PageBody>
    </div>
  )
}

export default Home;