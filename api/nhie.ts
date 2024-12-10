import axios from "axios";
import { nhiePromptsType } from "../types/nhiePromptsType";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const fetchAllPrompts = async (): Promise<nhiePromptsType[] | null> => {
  try {
    const response = await axios.get(`${baseUrl}/nhiePrompts`);
    if (response.status === 200) {
      const prompts: nhiePromptsType[] = response.data;
      return prompts;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
