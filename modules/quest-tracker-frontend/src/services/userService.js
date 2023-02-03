import axios from "axios";
import { environment } from "../environment/environment";

export const findUser = async () => {
  try {
    const response = await axios.get(`${environment.backendUrl}/users/1`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (newUser) => {
  try {
    const response = await axios.put(
      `${environment.backendUrl}/users/1`,
      newUser
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findLevelPercentage = async () => {
  try {
    const response = await axios.get(
      `${environment.backendUrl}/users/1/level-percentage`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
