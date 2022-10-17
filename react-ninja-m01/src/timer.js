'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
        this.timer
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps timer', this.props, nextProps)
    }

    // serve como uma validação para saber se atualiza o componente ou não, sempre deve retornar um boolean
    shouldComponentUpdate (nextProps, nextState) {
        // console.log('shouldComponentUpdate timer', this.props, nextProps)
        return this.props.time !== nextProps.time
    }

    // não pode usar o this.setState nesse método
    componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate timer', this.props, nextProps)
    }

    componentDidUpdate (prevProps, prevState) {
        console.log('componentDidUpdate timer', this.props, prevProps)
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render () {
        console.log('render timer')
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer
