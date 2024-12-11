import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardsType } from "../types/cards";
import { useEffect, useState } from "react";
import { fetchAllCards } from "../api/cards";
type DeckOfCardsProps = {
  normal?: boolean;
};

export default function DeckOfCards({ normal }: DeckOfCardsProps) {
  const [deckOfCards, setDeckOfCards] = useState<CardsType[]>([]);
  const [card, setCard] = useState<CardsType | null>(null);
  useEffect(() => {
    const getCards = async () => {
      const deckOfCards = await fetchAllCards();
      if (deckOfCards) {
        setDeckOfCards(deckOfCards);
        setCard(getRandomCard());
      } else {
        console.log("Error");
      }
    };

    getCards();
  }, []);

  const getRandomCard = (): CardsType | null => {
    if (deckOfCards.length === 0) return null;
    const randomCard = Math.floor(Math.random() * deckOfCards.length);
    const newCard = deckOfCards[randomCard];
    removeCardFromDeck(newCard);
    return newCard;
  };

  const removeCardFromDeck = (card: CardsType) => {
    const newDeck = deckOfCards.filter((c) => c !== card);
    setDeckOfCards(newDeck);
  };

  const handleChangeCard = () => {
    const newCard = getRandomCard();
    if (newCard) {
      setCard(newCard);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleChangeCard()}>
        {card ? (
          <View style={style.container}>
            {!normal && <Text style={style.text}>{card.rule}</Text>}
            <Image source={{ uri: card.image }} style={style.image} />
          </View>
        ) : (
          <Text style={style.text}>Press to play</Text>
        )}
      </TouchableOpacity>
      {deckOfCards.length === 0 && (
        <TouchableOpacity onPress={() => handleChangeCard()}>
          <Text style={style.text}>No More Cards, Play again</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
