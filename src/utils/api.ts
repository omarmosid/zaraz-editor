const ZONE_ID = process.env.ZONE_ID;
const API_TOKEN = process.env.API_TOKEN;
const ENDPOINT = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/settings/zaraz/config`;

export const getZarazConfig = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  fetch(ENDPOINT, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {};
    });
};
