'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor app')
    super()
    this.state = {
      color: 'green',
      showTimer: true,
      time: 0
    }
  }

  // executa no lado do frontend e do servidor
  componentWillMount () {
    console.log('componentWillMount app')
  }

  // executa somente no lado do frontend
  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render app')
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
          <Square color={this.state.color} />

          {['blue', 'red', 'green'].map((color) => (
            <Button 
              key={color}
              handleClick={() => this.setState({ color })}
            >
              {color}
            </Button>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <Timer time={this.state.time} />
          <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change props</button>
        </div>
      </main>
    )
  }
}

export default App
