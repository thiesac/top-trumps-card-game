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
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  validationFields = () => {
    const maxValueAtt = 90;
    const minValue = 0;
    const maxValueSumAtt = 120;
    const getAttr = cardAttr1 + cardAttr2 + cardAttr3;
    const valName = cardName.length > minValue;
    const valDesc = cardDescription.length > minValue;
    const valImg = cardImage.length > minValue;
    const valRarity = cardRare.length > minValue;
    const valAtt1 = cardAttr1 > minValue && cardAttr1 <= maxValueAtt;
    const valAtt2 = cardAttr2 > minValue && cardAttr2 <= maxValueAtt;
    const valAtt3 = cardAttr3 > minValue && cardAttr3 <= maxValueAtt;
    const valAttr = getAttr < maxValueSumAtt;

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
          && valAttr
        ),
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, this.validationFields);
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
