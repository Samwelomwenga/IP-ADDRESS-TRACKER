import axios from "axios";
const fetchGeoIPData = async (param) => {
  try {
    const baseUrl = " https://geo.ipify.org/api/v2/country,city";
    const apiKey = import.meta.env.VITE_API_KEY;

    let queryParams = {
      apiKey,
    };

    if (param) {
      queryParams[param.startsWith("http") ? "domain" : "ipAddress"] = param;
    }
    const response = await axios.get(baseUrl, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GeoIP data:", error);
    throw error;
  }
};
export default fetchGeoIPData;
