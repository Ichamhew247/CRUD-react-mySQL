import axios from "axios";

const studentApi = axios.create({
  baseURL: "http://localhost:8888",
});

export const createStudent = (input) => {
  return studentApi.post("/information/createstudent ", input);
};
