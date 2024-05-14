import { useEffect, useState } from "react";

import backofcard from "../assets/img/DeckOfCards/0-back.png";

import ace_of_clubs from "../assets/img/DeckOfCards/ace_of_clubs.png";
import ace_of_diamonds from "../assets/img/DeckOfCards/ace_of_diamonds.png";
import two_of_clubs from "../assets/img/DeckOfCards/two_of_clubs.png";
import two_of_diamonds from "../assets/img/DeckOfCards/two_of_diamonds.png";
import three_of_clubs from "../assets/img/DeckOfCards/three_of_clubs.png";
import three_of_diamonds from "../assets/img/DeckOfCards/three_of_diamonds.png";
import four_of_clubs from "../assets/img/DeckOfCards/four_of_clubs.png";
import four_of_diamonds from "../assets/img/DeckOfCards/four_of_diamonds.png";
import five_of_clubs from "../assets/img/DeckOfCards/five_of_clubs.png";
import five_of_diamonds from "../assets/img/DeckOfCards/five_of_diamonds.png";
import six_of_clubs from "../assets/img/DeckOfCards/six_of_clubs.png";
import six_of_diamonds from "../assets/img/DeckOfCards/six_of_diamonds.png";
import seven_of_clubs from "../assets/img/DeckOfCards/seven_of_clubs.png";
import seven_of_diamonds from "../assets/img/DeckOfCards/seven_of_diamonds.png";
import eight_of_clubs from "../assets/img/DeckOfCards/eight_of_clubs.png";
import eight_of_diamonds from "../assets/img/DeckOfCards/eight_of_diamonds.png";
import nine_of_clubs from "../assets/img/DeckOfCards/nine_of_clubs.png";
import nine_of_diamonds from "../assets/img/DeckOfCards/nine_of_diamonds.png";
import ten_of_clubs from "../assets/img/DeckOfCards/ten_of_clubs.png";
import ten_of_diamonds from "../assets/img/DeckOfCards/ten_of_diamonds.png";
import jack_of_clubs from "../assets/img/DeckOfCards/jack_of_clubs.png";
import jack_of_diamonds from "../assets/img/DeckOfCards/jack_of_diamonds.png";
import queen_of_clubs from "../assets/img/DeckOfCards/queen_of_clubs.png";
import queen_of_diamonds from "../assets/img/DeckOfCards/queen_of_diamonds.png";
import king_of_clubs from "../assets/img/DeckOfCards/king_of_clubs.png";
import king_of_diamonds from "../assets/img/DeckOfCards/king_of_diamonds.png";

import SingleCard from "./SingleCard";

const CardDeck = [
  { cardimage: ace_of_clubs, symbol: "ace", matched: false },
  { cardimage: ace_of_diamonds, symbol: "ace", matched: false },

  { cardimage: two_of_clubs, symbol: "two", matched: false },
  { cardimage: two_of_diamonds, symbol: "two", matched: false },

  { cardimage: three_of_clubs, symbol: "three", matched: false },
  { cardimage: three_of_diamonds, symbol: "three", matched: false },

  { cardimage: four_of_clubs, symbol: "four", matched: false },
  { cardimage: four_of_diamonds, symbol: "four", matched: false },

  { cardimage: five_of_clubs, symbol: "five", matched: false },
  { cardimage: five_of_diamonds, symbol: "five", matched: false },

  { cardimage: six_of_clubs, symbol: "six", matched: false },
  { cardimage: six_of_diamonds, symbol: "six", matched: false },

  { cardimage: seven_of_clubs, symbol: "clubs", matched: false },
  { cardimage: seven_of_diamonds, symbol: "diamonds", matched: false },

  { cardimage: eight_of_clubs, symbol: "eight", matched: false },
  { cardimage: eight_of_diamonds, symbol: "eight", matched: false },
  { cardimage: nine_of_clubs, symbol: "nine", matched: false },
  { cardimage: nine_of_diamonds, symbol: "nine", matched: false },

  { cardimage: ten_of_clubs, symbol: "ten", matched: false },
  { cardimage: ten_of_diamonds, symbol: "ten", matched: false },

  /*   {
    cardimage: jack_of_clubs,
    symbol: "jack",
    matched: false,
  },
  {
    cardimage: jack_of_diamonds,
    symbol: "jack",
    matched: false,
  },

  {
    cardimage: queen_of_clubs,
    symbol: "queen",
    matched: false,
  },
  {
    cardimage: queen_of_diamonds,
    symbol: "queen",
    matched: false,
  },

  {
    cardimage: king_of_clubs,
    symbol: "king",
    matched: false,
  },
  {
    cardimage: king_of_diamonds,
    symbol: "king",
    matched: false,
  }, */
];

/*************************** Main Game ***************************/
const MainGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  /**************** Shuffler ****************/

  const shuffledCards = () => {
    const shuffledCards = [...CardDeck]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    console.log(shuffledCards);
    setTurns(0);
  };

  //handle a choice: checking if you have chosen something
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.symbol === choiceTwo.symbol) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.symbol === choiceOne.symbol) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }

      setTurns(turns + 1);
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  //reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    shuffledCards();
  }, []);

  return (
    <>
      <h1>
        <center>Welcome To The Memory Game</center>
      </h1>
      <center>
        <button onClick={shuffledCards}>Show Cards</button>
      </center>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>

      <br />
      <p>
        <center>Turns: {turns}</center>
      </p>
      <br />
    </>
  );
};

export default MainGame;
