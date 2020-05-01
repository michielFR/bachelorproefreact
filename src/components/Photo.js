import '../App.css';
import React from 'react';
import { Card } from 'react-bootstrap';

class Photo extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.photo.img_src} />
                <Card.Body>
                    <Card.Title>{this.props.photo.id + " " + this.props.photo.camera.name}</Card.Title>
                    <Card.Text>
                        Date: {this.props.photo.earth_date}
                        <br />
                        Rover: {this.props.photo.rover.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Photo;
