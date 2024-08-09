import axios from "axios";
import { DAZEL_API_BASE_URL, DAZEL_API_KEY } from "../utils/constants.js";

/**
 * Constructs a full API URL based on the given route.
 * @param {string} route - The route for the API that will be appended to the base URL.
 * @param {boolean} withApiKey - A boolean indicating whether to include the API key in the URL.
 * @returns {string} The full API URL with the appended route and API key parameter.
 */
const composeApiUrl = (route, withApiKey) => {
    const url = new URL(DAZEL_API_BASE_URL);
    url.pathname += route;
    if (withApiKey)
        url.searchParams.append("api_key", DAZEL_API_KEY);
    return url.toString();
}

class DazelApi {
    // static getServerHealth = async () => {
    //     try {
    //         const response = await axios.get(composeApiUrl("/health", false), {
    //             headers: {
    //                 "Accept": "application/json"
    //             }
    //         });
    //         return response.data;
    //     }
    //     catch (error) {
    //         console.error(`Error fetching data: ${error.message}`);
    //         return null;
    //     }
    // }

    static getProfileData = async () => {
        try {
            const response = await axios.get(composeApiUrl("/profile", true), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getStatisticsData = async () => {
        try {
            const response = await axios.get(composeApiUrl("/statistics", true), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getTopSellingProduct = async () => {
        try {
            const response = await axios.get(composeApiUrl("/topSellingProduct", true), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getRecentOrders = async () => {
        try {
            const response = await axios.get(composeApiUrl("/recentOrders", true), {
                headers: {
                    "Accept": "application/json"
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static loginUser = async (username, password) => {
        try {
            const response = await axios.post(composeApiUrl("auth"),
                {
                    username: username,
                    password: password
                },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default DazelApi;