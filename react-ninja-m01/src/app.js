'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'green'
    }
  }

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
        <div style={{ marginTop: '20px' }}>
          <Square color={this.state.color}/>

          {['blue', 'red', 'green'].map((color) => (
            <Button 
              key={color}
              handleClick={() => this.setState({ color })}
            >
              {color}
            </Button>
          ))}
        </div>
      </main>
    )
  }
}

export default App
