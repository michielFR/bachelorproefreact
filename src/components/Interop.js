import '../App.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Interop extends React.Component {

    createAlert() {
        alert("dit is een alert");
    }

    startAnimation() {
        var elem = document.getElementById("animate");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos === 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    helloUser() {
        var txt;
        var person = prompt("Wat is je naam?", "Harry Potter");
        if (person === null || person === "") {
            txt = "gebruiker heeft geannuleerd.";
        } else {
            txt = "Dag " + person + "! Wat vind je van de animatie?";
        }
        document.getElementById("demo").innerHTML = txt;
    }

    render() {
        return (
            <div className='px-3'>
                <h1>JavaScript</h1>
                <Card>
                    <Card.Header>
                        <div class="row">
                            <div class="col-md-2">
                                <h5>Standaard functies</h5>
                            </div>
                            <div class="col-md-10 text-right">
                                <div class="btn-group" role="group">
                                    <Button type="button" variant="success" onClick={this.createAlert}>Alert</Button>
                                    <Button type="button" variant="success" onClick={this.helloUser}>Dag gebruiker</Button>
                                    <Button type="button" variant="success" onClick={this.startAnimation}>Start animatie</Button>
                                </div>
                            </div>
                        </div >
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="text-center">
                            <p id="demo"></p>
                            <hr />
                            <div id="box" className="bg-primary">
                                <div id="animate" className="bg-success"></div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}

export default Interop;
