import '../App.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Sort extends React.Component {
  state = {
    gegenereerd: [],
    gesorteerd: [],
    difference: 0,
    comparisons: 0,
    arraycheck: 0,
    currentdistribution: 'Genereer eerst',
    justsorted: false
  }

  genereerRandomGetallen = () => {
    var arr = []
    for (var i = 0; i < 5000; i++) {
      arr[i] = Math.floor(Math.random() * 1000);
    }
    this.setState({ gegenereerd: arr, currentdistribution: 'Random', justsorted: false })
    this.fillGesorteerd(arr);
  }

  genereerReversedGetallen = () => {
    var arr = []
    for (var i = 0; i < 5000; i++) {
      arr[i] = 5000 - i;
    }
    this.setState({ gegenereerd: arr, currentdistribution: 'Reversed', justsorted: false })
    this.fillGesorteerd(arr);
  }

  genereerFewUniqueGetallen = () => {
    var arr = []
    var getal = 1;
    for (var i = 0; i < 5000; i++) {
      arr[i] = getal;
      if (i % 500 === 0) {
        getal++;
      }
    }
    arr = this.Shuffle(arr);
    this.setState({ gegenereerd: arr, currentdistribution: 'Few unique', justsorted: false })
    this.fillGesorteerd(arr);
  }

  genereerAlmostSortedGetallen = () => {
    var arr = []
    for (var i = 0; i < 5000; i++) {
      arr[i] = i;
    }
    arr[4500] = 5;
    this.setState({ gegenereerd: arr, currentdistribution: 'Almost sorted', justsorted: false })
    this.fillGesorteerd(arr);
  }

  toonArray = (arr) => {
    var items = "nog niets gegenereerd";
    if (arr.length !== 0) {
      items = "";
      for (var i = 0; i < 100; i++) {
        items += arr[i] + " - ";
      }
      items += "..."
    }
    return items;
  }

  justSorted = (js) => {
    if (js) {
      return (
        <div>
          <hr />
          <h5><b>Uitvoertijd</b> = {this.state.difference} ms</h5>
          <h5><b>Vergelijkingen</b> = {this.state.comparisons.toLocaleString()} </h5>
          <h5><b>Array wijzigingen</b> = {this.state.arraycheck.toLocaleString()}  </h5>
        </div>
      )
    } else {
      return (<div></div>);
    }
  }

  fillGesorteerd = (gen) => {
    var a = []
    for (var i = 0; i < gen.length; i++) {
      a[i] = gen[i];
    }
    this.setState({ gesorteerd: a });
  }

  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  bubbleSort = () => {
    var _arraycheck = 0;
    var _comparisons = 0;
    var start = new Date().getTime();
    var swapp;
    var x = this.state.gesorteerd;
    var n = x.length - 1;
    do {
      swapp = false;
      for (var i = 0; i < n; i++) {
        _comparisons += 1;
        if (x[i] > x[i + 1]) {
          var temp = x[i];
          x[i] = x[i + 1];
          x[i + 1] = temp;
          swapp = true;
          _arraycheck += 2;
        }
      }
      n--;
    } while (swapp);

    this.setState({ gesorteerd: x });
    var end = new Date().getTime();
    this.setState({ difference: (end - start) });
    this.setState({ comparisons: _comparisons });
    this.setState({ arraycheck: _arraycheck });
    this.setState({ justsorted: true });
  }

  render() {
    return (
      <div className='px-3'>
        <h1>Genereren & Sorteren</h1>
        <Card>
          <Card.Header>
            <div class="row">
              <div class="col-md-2">
                <h5>{this.state.currentdistribution}</h5>
              </div>
              <div class="col-md-9 text-right">
                <div class="btn-group" role="group">
                  <Button type="button" variant="success" onClick={this.genereerRandomGetallen}>Random</Button>
                  <Button type="button" variant="success" onClick={this.genereerReversedGetallen}>Reversed</Button>
                  <Button type="button" variant="success" onClick={this.genereerFewUniqueGetallen}>Few unique</Button>
                  <Button type="button" variant="success" onClick={this.genereerAlmostSortedGetallen}>Almost sorted</Button>
                </div>
              </div>
              <div class="col-md-1">
                <Button variant="warning" onClick={this.bubbleSort}>Sorteer</Button>
              </div >
            </div >
          </Card.Header>
          <Card.Body>
            <Card.Title>Gegenereerd</Card.Title>
            <Card.Text>
              {this.toonArray(this.state.gegenereerd)}
            </Card.Text>
            <hr />
            <Card.Title>Gesorteerd</Card.Title>
            <Card.Text>
              {this.toonArray(this.state.gesorteerd)}
            </Card.Text>
            {this.justSorted(this.state.justsorted)}
          </Card.Body>
        </Card>
      </div >
    );
  }
}

export default Sort;