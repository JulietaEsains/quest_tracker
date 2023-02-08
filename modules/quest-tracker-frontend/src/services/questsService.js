import axios from "axios";
import { environment } from "../environment/environment";

export const findAllPendingQuests = async () => {
  try {
    const response = await axios.get(
      `${environment.backendUrl}/quests/pending`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findAllCompletedQuests = async () => {
  try {
    const response = await axios.get(
      `${environment.backendUrl}/quests/completed`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const completeQuest = async (questId) => {
  try {
    const response = await axios.put(
      `${environment.backendUrl}/quests/${questId}/complete`
    );
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
