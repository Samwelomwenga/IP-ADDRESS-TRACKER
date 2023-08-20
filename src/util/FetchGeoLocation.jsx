import axios from "axios";
const fetchGeoIPData = async(param) => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_API_URL;

        let queryParams={

        }

        if (param) {
            queryParams[param.startsWith("http")?"domain":"ipAddress"]=param;
        }
        const response= await axios.get(baseUrl,{
            params:queryParams,
        });
        console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.error('Error fetching GeoIP data:', error);
    throw error;
    }
};
export default fetchGeoIPData;