import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class FavCards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.pLanguagesInfo.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.pLanguagesInfo.title}</Card.Title>
                    <Button variant="primary" onClick={() => this.props.deletefromfav(this.props.idx)}>Delete</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default FavCards
