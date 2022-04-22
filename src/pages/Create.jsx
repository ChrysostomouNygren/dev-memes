import React from 'react'
import Header from '../components/Header'
import MemeGenerator from '../components/MemeGenerator'

function Create() {
  return (
    <div>
      <Header />
      <h2 className='generator-headline'>meme generator!</h2>
      <MemeGenerator />
    </div>
  )
}

export default Create