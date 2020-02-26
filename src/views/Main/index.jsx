import React, { Component } from 'react';

import './styles.css';
import Button from '../Button/index';
import Display from '../Display/index';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equalsOperation = operation === '=';
      const currentOperation = this.state.operation;
      let values = [...this.state.values];

      switch (currentOperation) {
        case '+':
          values[0] = values[0] + values[1];
          break;
        case '-':
          values[0] = values[0] - values[1];
          break;
        case '*':
          values[0] = values[0] * values[1];
          break;
        case '/':
          values[0] = values[0] / values[1];
          break;
        default:
          console.log('Something went wrong');
          break;
      }

      values[1] = 0;

      this.setState({
      displayValue: values[0],
      operation: equalsOperation ? null : operation,
      current: equalsOperation ? 1 : 0,
      clearDisplay: !equalsOperation,
      values
      });
    }
  }

  addDigit(value) {
    if (value === '.' && this.state.displayValue.includes(value)) {
      return;
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + value;

    this.setState({ displayValue, clearDisplay: false });
    this.setValeOnArray(value, displayValue);
  }

  setValeOnArray(value, displayValue) {
    if (value !== '.') {
      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[index] = newValue;
      this.setState({ values });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button txt="AC" click={this.clearMemory} triple />
        <Button txt="/" click={this.setOperation} operation />
        <Button txt="7" click={this.addDigit} />
        <Button txt="8" click={this.addDigit} />
        <Button txt="9" click={this.addDigit} />
        <Button txt="*" operation click={this.setOperation} />
        <Button txt="4" click={this.addDigit} />
        <Button txt="5" click={this.addDigit} />
        <Button txt="6" click={this.addDigit} />
        <Button txt="-" operation click={this.setOperation} />
        <Button txt="1" click={this.addDigit} />
        <Button txt="2" click={this.addDigit} />
        <Button txt="3" click={this.addDigit} />
        <Button txt="+" operation click={this.setOperation} />
        <Button txt="0" double click={this.addDigit} />
        <Button txt="." click={this.addDigit} />
        <Button txt="=" operation click={this.setOperation} />
      </div>)
  }
}
