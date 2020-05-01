import '../App.css';
import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function PicOfDay() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=JiErxLPFtI9gmM24WjFWpaP9m84iXtCZjX0FcfOb');
        const item = await data.json();
        console.log(item);
        setItem(item);
    };

    return (
        <div className="text-center px-3">
            <h1 className="text-center">Nasa picture of the day!</h1>
            <h5>{item.title} - {item.date}</h5>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {item.explanation}
                        <br />
                        klik <a href={item.hdurl} > hier</a> voor foto.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={item.hdurl} />
            </Card>
        </div>
    )
}

export default PicOfDay;