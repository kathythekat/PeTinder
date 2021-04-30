import axios from "axios";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

async function fetchOauth() {
  let resp = await axios("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    data: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  let newToken = resp.data.access_token;
  let expires = new Date().getTime() + resp.data.expires_in * 1000;
  localStorage.setItem("token", newToken);
  localStorage.setItem("expires", expires);
}

export default async function getToken() {
  const expires = localStorage.getItem("expires");
  const isTokenExpired = !expires || expires - new Date().getTime() < 1;

  if (isTokenExpired) {
    await fetchOauth();
  }
  return localStorage.getItem("token");
}
