import Axios from "axios";
import { redirect } from "react-router-dom";

export async function getIssPosition() {
  try {
    const API = "https://api.wheretheiss.at/v1/satellites/25544";
    const response = await Axios.get(API);
    return response;
  } catch (error) {
    console.log(error.response.data.error);
    if (error.response.data.error) {
      console.log("loading");
    }
  }
}
