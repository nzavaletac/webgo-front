import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

// export const getUsers = async () => {
//   const result = await axios.get(`${URL_BACKEND}/users`);
//   return result.data;
// };

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

// export const postUsers = async (objUser) => {
//   const peticion = await fetch(`${URL_BACKEND}/users/signup`, {
//     method: "POST",
//     body: JSON.stringify(objUser),
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   const data = await peticion.json();
//   return data;
// };

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
