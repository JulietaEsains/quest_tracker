import axios from "axios";
import { environment } from "../environment/environment";

export const findAllQuests = async () => {
  try {
    const response = await axios.get(`${environment.backendUrl}/quests`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteQuest = async (questId) => {
  try {
    await axios.delete(`${environment.backendUrl}/quests/${questId}`);
  } catch (error) {
    console.error(error);
  }
};

export const findFormattedDueDate = async (questId) => {
  try {
    const response = await axios.get(
      `${environment.backendUrl}/quests/${questId}/formatted-date`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
