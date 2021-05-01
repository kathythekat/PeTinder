import getToken from "./get-token";
import axios from "axios";

const API_URL = "https://api.petfinder.com/v2";

export default async function getDogs() {
  const token = await getToken();
  const resp = await axios.get(`${API_URL}/animals?type=dog&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("API call", resp.data);
  return resp.data.animals;
}
