import getToken from "./get-token";
import axios from "axios";

const API_URL = "https://api.petfinder.com/v2";

export default async function getCats() {
  const token = await getToken();
  const resp = await axios.get(`${API_URL}/animals?type=cat&page=3`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("API call", resp.data);
  return resp.data.animals;
}
