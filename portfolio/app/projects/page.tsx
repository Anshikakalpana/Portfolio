import React from 'react'
import Ecommerce from '../components/ecommerce'
import Chatapp from '../components/chat-app'
import AuthAPI from '../components/auth-api'

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-50">Projects</h1>
        <Ecommerce/>
        <Chatapp/>
        <AuthAPI/>
    </div>
  )
}

export default Projects