import axios from "axios";

export default axios.create({
  baseURL: "https://7syvuumsg3.execute-api.eu-central-1.amazonaws.com",
  headers: {
    common: {
      ClientID: "6kp90oc7nk8uthuo23ubjp1k2o",
      ClientSecret: "d4qeihkqtrqq6vbgtm8hf9ooee58nefj38bdeckq06gleg62h46",
      Accept: "application/json",
    },
  },
});
