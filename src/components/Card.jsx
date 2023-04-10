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
      <div>
        <h2>Preview</h2>
        <section className="section-card">
          <div className="card-background">
            <h3 data-testid="name-card">{ cardName }</h3>
            <div className="img-frame">
              {
                cardTrunfo
              && <p
                data-testid="trunfo-card"
                className="p-super-trunfo"
              >
                Super Trunfo
                 </p>
              }
              <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            </div>
            <div className="div-attr">

              <h4 data-testid="attr1-card" className="first-h4">
                Attr01
                <br />
                { cardAttr1 }
              </h4>
              <h4 data-testid="attr2-card">
                Attr02
              <br />
                { cardAttr2 }
              </h4>
              <h4 data-testid="attr3-card">
                Attr03
              <br />
                { cardAttr3 }
              </h4>
            </div>
            <p data-testid="rare-card">{ cardRare }</p>
            <p
              data-testid="description-card"
              className="description-card"
            >
              { cardDescription }
            </p>

            {/* {
            cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : ''
          } */}
            {/* if(cardTrunfo) {
            <p data-testid="trunfo-card">Super Trunfo</p>
          } */}

          </div>
        </section>
      </div>
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
