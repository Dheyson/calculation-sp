import React, { Component } from 'react';

import './styles.css';
import Button from '../Button/index';
import Display from '../Display/index';

export default class Main extends Component {

  clearMemory() {
    console.log('limpar');
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    console.log(n);
  }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);
    return (
      <div className="calculator">
        <Display value={100}/>
        <Button txt="AC" click={() => this.clearMemory()} triple/>
        <Button txt="/" click={() => this.setOperation('/')} operation/>
        <Button txt="7" click={() => this.addDigit()}/>
        <Button txt="8" click={() => this.addDigit('8')}/>
        <Button txt="9" click={() => this.addDigit('9')}/>
        <Button txt="*" operation click={() => this.setOperation('/')}/>
        <Button txt="4" click={() => this.addDigit('4')}/>
        <Button txt="5" click={() => this.addDigit()}/>
        <Button txt="6" click={() => this.addDigit('7')}/>
        <Button txt="-" operation click={() => this.setOperation('/')}/>
        <Button txt="1" click={() => this.addDigit('7')}/>
        <Button txt="2" click={() => this.addDigit('7')}/>
        <Button txt="3" click={() => this.addDigit('7')}/>
        <Button txt="+" operation click={() => this.setOperation('/')}/>
        <Button txt="0" double click={() => this.addDigit('7')}/>
        <Button txt="." click={() => this.setOperation('/')}/>
        <Button txt="=" operation click={() => this.setOperation('/')}/>
      </div>)
  }
}
