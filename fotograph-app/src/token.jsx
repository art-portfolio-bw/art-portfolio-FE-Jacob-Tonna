import axios from "axios";

export const token = () => {
  const token = localStorage.getItem("tokrn");
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};
