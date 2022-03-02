import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
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
      cardList: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((oldState) => ({
      ...oldState,
      [name]: value,
    }), () => this.validateButton());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((oldState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [...oldState.cardList, card],
    }));

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  validateButton = () => {
    const minForAttr = 0;
    const maxForAttr = 90;
    const maxSumAttr = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    this.setState({
      isSaveButtonDisabled: !(cardName && cardDescription && cardImage && cardRare
        && cardAttr1 >= minForAttr
        && cardAttr1 <= maxForAttr
        && cardAttr2 >= minForAttr
        && cardAttr2 <= maxForAttr
        && cardAttr3 >= minForAttr
        && cardAttr3 <= maxForAttr
        && sumAttr <= maxSumAttr),
    });
  }

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
      cardList,
    } = this.state;
    return (
      <div>
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
        <div>
          { cardList.map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
