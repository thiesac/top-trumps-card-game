import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
    } = this.props;
    return (
      <section className="section-card">
        <div className="card-background">
          <h3 data-testid="name-card">{ cardName }</h3>
          <div className="img-frame">

            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <p data-testid="description-card">
            Descrição:
            { cardDescription }
          </p>
          <h4 data-testid="attr1-card" className="first-h4">
            Attr01--------------------
            { cardAttr1 }
          </h4>
          <h4 data-testid="attr2-card">
            Attr02--------------------
            { cardAttr2 }
          </h4>
          <h4 data-testid="attr3-card">
            Attr03--------------------
            { cardAttr3 }
          </h4>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
          }
          {/* {
            cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : ''
          } */}
          {/* if(cardTrunfo) {
            <p data-testid="trunfo-card">Super Trunfo</p>
          } */}

        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
