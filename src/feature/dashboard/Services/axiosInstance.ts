import axios from "axios";

/**
 custom Axios instance where you can set headers and other configurations
 So that all your api requests will contain these configs.  
 */

const apiClient = axios.create({
    baseURL:"http://localhost:8081",
    headers: {
        "Content-Type": "application/json", // Default content type
        Accept: "application/json", // Default accept type
      },
})

export default apiClient