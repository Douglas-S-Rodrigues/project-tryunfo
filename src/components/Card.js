import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <>
        <h2 data-testid="card-name">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">
            Attr01
            { cardAttr1 }
          </li>
          <li data-testid="attr2-card">
            Attr02
            { cardAttr2 }
          </li>
          <li data-testid="attr3-card">
            Attr03
            { cardAttr3 }
          </li>
        </ul>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </>
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
