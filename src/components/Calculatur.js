import React, { Component } from 'react';
import '../styles/calculator.css';
import calculate from './logic/calculate';

const buttons = [
  { val: 'AC', id: 1 },
  { val: '+/-', id: 2 },
  { val: '%', id: 3 },
  { val: '÷', id: 4 },
  { val: '7', id: 5 },
  { val: '8', id: 6 },
  { val: '9', id: 7 },
  { val: 'x', id: 8 },
  { val: '4', id: 9 },
  { val: '5', id: 10 },
  { val: '6', id: 11 },
  { val: '-', id: 12 },
  { val: '1', id: 13 },
  { val: '2', id: 14 },
  { val: '3', id: 15 },
  { val: '+', id: 16 },
  { val: '0', id: 17 },
  { val: '.', id: 18 },
  { val: '=', id: 19 },
];

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(this.state, data);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <form>
          {total}
          {operation}
          {next}
        </form>
        <div className="keypad">
          {buttons.map((btn) => (
            <button
              onClick={this.handleClick}
              className={`${btn.val === '÷' ? 'orangebg' : 'graybg'} && ${
                btn.val === '+' ? 'orangebg' : 'graybg'
              }  && ${btn.val === 'x' ? 'orangebg' : 'graybg'} && ${
                btn.val === '-' ? 'orangebg' : 'graybg'
              } && ${btn.val === '=' ? 'orangebg' : 'graybg'}
              && ${btn.val === '0' ? 'spanzero' : 'graybg'}`}
              key={btn.id}
              type="button"
              id="clear"
              value={btn.val}
            >
              {btn.val}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
