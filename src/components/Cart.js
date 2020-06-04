import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TabelCart from './TableCart'
export default class Cart extends Component {
    render() {
        return (
            <Container>
                    <TabelCart></TabelCart>
            </Container>
        )
    }
}
