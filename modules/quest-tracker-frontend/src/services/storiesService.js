import axios from "axios";
import { environment } from "../environment/environment";

export const findAllStories = async () => {
  try {
    const response = await axios.get(`${environment.backendUrl}/stories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createStory = async (newStory) => {
  try {
    await axios.post(`${environment.backendUrl}/stories`, newStory);
  } catch (error) {
    console.error(error);
  }
};
