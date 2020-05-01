import '../App.css';
import Photo from './Photo';
import { Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Nasa() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' +
            '?earth_date=2015-6-3&api_key=JiErxLPFtI9gmM24WjFWpaP9m84iXtCZjX0FcfOb');
        const items = await data.json();
        console.log(items.photos);
        setItems(items.photos);
    };

    return (
        <div>
            <h1 className="text-center">Nasa</h1>
            <Row center="true">
                {items.map(item => (
                    <Col className="d-flex justify-content-around" key={item.id} >
                        <Photo photo={item} />
                    </Col>
                ))}
            </Row>
        </div >
    )
}

export default Nasa;