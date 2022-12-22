import React, { useState } from 'react';
import '../styles/calculator.css';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function

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

function Calculatur() {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, next, operation } = obj;

  const handleClick = (e) => {
    const data = e.target.value;
    const result = calculate(obj, data);
    setObj(result);
  };
  return (
    <>
      <div className="container">
        <form>
          {total}
          {operation}
          {next}
        </form>
        <div className="keypad">
          {buttons.map((btn) => (
            <button
              onClick={handleClick}
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
    </>
  );
}

export default Calculatur;
