<div className="container">
  <form>
    <input type="text" value={result} />
  </form>
  <div className="keypad">
    {buttons.map((btn) => (
      <button
        className={`${btn.val === '÷' ? 'orangebg' : 'graybg'} && ${
          btn.val === '+' ? 'orangebg' : 'graybg'
        }  && ${btn.val === 'x' ? 'orangebg' : 'graybg'} && ${
          btn.val === '-' ? 'orangebg' : 'graybg'
        } && ${btn.val === '=' ? 'orangebg' : 'graybg'}
              && ${btn.val === '0' ? 'spanzero' : 'graybg'}`}
        key={btn.id}
        type="button"
        id="clear"
      >
        {btn.val}
      </button>
    ))}
  </div>
</div>;
