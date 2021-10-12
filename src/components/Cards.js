import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class Cards extends Component {

    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.pLanguagesInfo.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.pLanguagesInfo.title}</Card.Title>
                    <Button variant="primary">Add To Fav</Button>
                </Card.Body>
            </Card>

        )
    }
}

export default Cards
