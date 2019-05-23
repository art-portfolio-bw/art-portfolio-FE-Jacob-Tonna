import axios from "axios";

export const token = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};

export default token;
