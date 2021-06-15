import getToken from "./get-token";
import axios from "axios";
import { generateRandomPage } from "../helpers/generate-random";

const API_URL = "https://api.petfinder.com/v2";

export default async function getDogs() {
  const token = await getToken();
  const randomPage = generateRandomPage();
  const resp = await axios.get(
    `${API_URL}/animals?type=dog&limit=50&page=${randomPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("API call", resp.data);
  return resp.data.animals;
}
