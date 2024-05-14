import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.cardimage} alt="Card Front" />
        <img
          className="back"
          src={"../src/assets/img/DeckOfCards/0-back.png"}
          alt="Card Back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
