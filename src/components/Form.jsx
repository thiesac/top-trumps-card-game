import React from 'react';
import PropTypes from 'prop-types';
// import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form-fields">
        <label htmlFor="name-input">
          Nome da Carta
          <input
            className="className-input"
            type="text"
            data-testid="name-input"
            id="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-description">
          Descrição da Carta
          <textarea
            className="classCard-description"
            data-testid="description-input"
            id="card-description"
            cols="30"
            rows="2"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            id="rare-input"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          {
            (
              hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo-input"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            )
          }
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
