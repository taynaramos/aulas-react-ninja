'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import Timer from './timer'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      color: 'green',
      showTimer: true
    }
  }

  // executa no lado do frontend e do servidor
  componentWillMount() {
    console.log('componentWillMount')
  }

  // executa somente no lado do frontend
  componentDidMount() {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
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
        <div style={{ marginTop: '20px' }}>
          {this.state.showTimer && <Timer />}
          <button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>Show/hide timer</button>
        </div>
      </main>
    )
  }
}

export default App
