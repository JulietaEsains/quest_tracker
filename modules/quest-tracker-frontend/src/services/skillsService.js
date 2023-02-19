import axios from "axios";
import { environment } from "../environment/environment";

export const findAllSkills = async () => {
  try {
    const response = await axios.get(`${environment.backendUrl}/skills`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const findLevelPercentage = async (skillId) => {
  try {
    const response = await axios.get(
      `${environment.backendUrl}/skills/${skillId}/level-percentage`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createSkill = async (newSkill) => {
  try {
    await axios.post(`${environment.backendUrl}/skills`, newSkill);
  } catch (error) {
    console.error(error);
  }
};
