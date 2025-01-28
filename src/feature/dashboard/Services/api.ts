

import { paths } from "../utils/paths";
import apiClient from "./axiosInstance";




 /** 
this file contains 
1. making all api calls and getting the return response from them.
2. as each single feature will have seperate api's so for entire dashboard feature contains single api.ts file
3. you can have different ts file for different part.
4. also its better to store all the urls and some might be even dynamic urls.
*/

export const dashboardApi = {
    //api call returns promise of typeOfDataStructure
  getDashboardData :async():Promise<string[]> => {    
     const response = await apiClient.get(paths.getDashboardData())
     return  response.data
  }
}