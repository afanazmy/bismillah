import axios from "axios";

const baseUrl = "https://www.omdbapi.com";
const apiKey = "faf7e5bb";

/**
 *
 * @param {{method: import("axios").Method, baseUri: String, endpoint: String, headers: any, data: any, params: any}} param
 * @returns
 */
export const API = async ({
  method = "GET",
  baseUri = baseUrl,
  endpoint = "/",
  headers,
  data,
  params = {},
}) => {
  let url = new URL(`${baseUri}${endpoint}`);
  params = { apikey: apiKey, ...params };

  return await axios({
    method,
    url: url.href,
    headers,
    params,
    data,
  })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
