import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const { onReset, counters, onDelete, onIncrement, onCreate } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onCreate}>
          Create
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counters;
