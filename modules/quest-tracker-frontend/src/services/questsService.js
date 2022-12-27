import axios from "axios";
import { environment } from "../environment/environment";

export const findAllQuests = async () => {
  try {
    const response = await axios.get(`${environment.backendUrl}/quests`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuest = async (questId) => {
  try {
    await axios.delete(`${environment.backendUrl}/quests/${questId}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
