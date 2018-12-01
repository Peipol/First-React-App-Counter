import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App-Mounted");
  }

  //  v---- yo solito ----v ///
  handleCreate = () => {
    const counters = [...this.state.counters];
    const pastLength = counters.length;
    counters.length += pastLength !== 0 ? 1 : 0;
    const n = pastLength === 0 ? 0 : 1;
    counters[counters.length - n] = {
      id: counters.length !== 0 ? counters[counters.length - 2].id + 1 : 1,
      value: 0
    };
    this.setState({ counters });
  }; //hasta aqui

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // changing the state directly is a no-no in React for some reason
    counters[index].value++;
    this.setState({ counters }); // notice the curly brackets
  };

  handleReset = () => {
    const counters = this.state.counters.map(counterObject => {
      counterObject.value = 0;
      return counterObject;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId); // los que son distintos a el
    this.setState({ counters });
  };
  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onCreate={this.handleCreate}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
