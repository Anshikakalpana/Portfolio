import React from 'react'
import Ecommerce from '../components/ecommerce'
import Chatapp from '../components/chat-app'
import AuthAPI from '../components/auth-api'
import HuffmanUtility from '../components/huffman'
import RateLimiter from '../components/rate-limiter'

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <h1 className="text-3xl font-bold mb-8 text-center text-amber-50">Projects</h1>
       
        <RateLimiter/>
        <Ecommerce/>
        <Chatapp/>
        <AuthAPI/>
          <div className=' py-16'>
        <HuffmanUtility/>

        </div>
    </div>
  )
}

export default Projects