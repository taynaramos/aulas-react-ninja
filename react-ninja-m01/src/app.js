'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component {
  render () {
    return (
      <main>
        <div className='container'>
          <Title name='Will' lastname='Smith' />
          <label htmlFor='input' data-label='Label'>Input</label>
          <input type='text' id='input' aria-hidden={true} />
          {['blue', 'red', 'green'].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
        <div 
          className='container' 
          style={{ marginTop: '20px' }}
          onClick={(e) => {
            alert('clicou')
          }}
        >
          <Square/>
        </div>
        <Button>Clique aqui</Button>
        <LikeButton />
      </main>
    )
  }
}

export default App
