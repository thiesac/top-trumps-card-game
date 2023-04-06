import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    // deck: [],
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
    const valAtt1 = cardAttr1 >= minValue && cardAttr1 <= maxValueAtt;
    const valAtt2 = cardAttr2 >= minValue && cardAttr2 <= maxValueAtt;
    const valSumAttr = getAttr <= maxValueSumAtt; // soma dos atributos menor que 210
    const valAtt3 = cardAttr3 >= minValue && cardAttr3 <= maxValueAtt;
    const valDesc = cardDescription.length > minValue; // valida a descrição
    const valImg = cardImage.length > minValue; // valida imagem
    const valRarity = cardRare.length > minValue; // valida raridade
    const valName = cardName.length > minValue; // valida nome

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
    );
  }
}

export default App;
// iniciando projeto
