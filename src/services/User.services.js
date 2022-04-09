import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postUsers = async (objUser) => {
  const result = await axios.post(
    `${URL_BACKEND}/users/signup`,
    JSON.stringify(objUser),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return result.data;
};

export const putUsers = async (objUser) => {
  const response = await axios.put(
    `${URL_BACKEND}/users/${objUser._id}`,
    JSON.stringify(objUser),
    {
      headers: { "Content-type": "Application/json" },
    }
  );
  return response;
};
