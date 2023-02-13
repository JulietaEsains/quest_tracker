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
