import axios from "axios";
import { CardsType } from "../types/cards";
const baseUrl = process.env.EXPO_PUBLIC_API_URL;
console.log("baseUrl", baseUrl);

export const fetchAllCards = async (): Promise<CardsType[] | null> => {
  console.log("baseUrl", baseUrl);
  try {
    const response = await axios.get(`${baseUrl}/cards`);
    if (response.status === 200) {
      const deckOfCards: CardsType[] = response.data;
      return deckOfCards;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
