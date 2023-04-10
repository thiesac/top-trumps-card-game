import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardsDeck: [],
  };

  validationFields = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const maxValueAtt = 90;
    const minValue = 0;
    const maxValueSumAtt = 210;
    const getAttr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)); // soma atributos
    const valAtt1 = Number(cardAttr1) >= minValue && Number(cardAttr1) <= maxValueAtt;
    const valAtt2 = Number(cardAttr2) >= minValue && Number(cardAttr2) <= maxValueAtt;
    const valAtt3 = Number(cardAttr3) >= minValue && Number(cardAttr3) <= maxValueAtt;
    const valSumAttr = getAttr <= maxValueSumAtt; // soma dos atributos menor que 210
    const valDesc = cardDescription !== ''; // valida a descrição
    const valImg = cardImage !== ''; // valida imagem
    const valRarity = cardRare !== ''; // valida raridade
    const valName = cardName !== ''; // valida nome

    this.setState({
      isSaveButtonDisabled:
        !(
          valName
          && valDesc
          && valImg
          && valRarity
          && valAtt1
          && valAtt2
          && valAtt3
          && valSumAttr
        ),
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  onSaveButtonClick = () => {
    const card = this.state;

    this.setState((prevState) => ({
      hasTrunfo: prevState.cardTrunfo ? true : prevState.hasTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardsDeck: [...prevState.cardsDeck, card],
    }));
  };

  onRemoveBtnClick = (name, trunfo) => {
    const { cardsDeck } = this.state;
    const newDeck = cardsDeck.filter((card) => card.cardName !== name);

    this.setState({
      hasTrunfo: trunfo.cardTrunfo ? false : trunfo.hasTrunfo,
      cardsDeck: newDeck,
    });
  };

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
      cardsDeck,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <div className="div-cards">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <ul>
          {
            cardsDeck.map((card) => (
              <li key={ card.cardName } id={ card.cardName }>

                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  onClick={ () => this.onRemoveBtnClick(card.cardName, card.cardTrunfo) }
                >
                  Excluir
                </button>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default App;
