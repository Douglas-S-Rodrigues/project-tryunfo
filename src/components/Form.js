import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="card-name">
          <input type="text" data-testid="name-input" id="card-name" />
        </label>
        <textarea data-testid="description-input"> </textarea>
        <label htmlFor="attr1">
          <input type="number" data-testid="attr1-input" id="attr1" />
        </label>
        <label htmlFor="attr2">
          <input type="number" data-testid="attr2-input" id="attr2" />
        </label>
        <label htmlFor="attr3">
          <input type="number" data-testid="attr3-input" id="attr3" />
        </label>
        <label htmlFor="img">
          <input type="text" data-testid="image-input" id="img" />
        </label>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="s-trunfo">
          <input type="checkbox" data-testid="trunfo-input" id="s-trunfo" />
        </label>
        <button type="submit" data-testid="save-button"> Salvar </button>
      </>
    );
  }
}

export default Form;
