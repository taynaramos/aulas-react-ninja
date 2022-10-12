'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Title name='Will' lastname='Smith' />
        <label htmlFor='input' data-label='Label'>Input</label>
        <input type='text' id='input' aria-hidden={true} />
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Will' lastname='Smith' />
//         <label htmlFor='input' data-label='Label'>Input</label>
//         <input type='text' id='input' aria-hidden={true} />
//       </div>
//     )
//   }
// })

export default App
