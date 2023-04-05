import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da Carta
          <input type="text" data-testid="name-input" id="name-input" />
        </label>
        <label htmlFor="card-description">
          Descrição da Carta
          <textarea
            name=""
            data-testid="description-input"
            id="card-description"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input type="number" data-testid="attr1-input" id="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input type="number" data-testid="attr2-input" id="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input type="number" data-testid="attr3-input" id="attr3-input" />
        </label>
        <label htmlFor="card-description">
          Imagem
          <input type="text" data-testid="image-input" id="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select name="rarity" id="rare-input" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
