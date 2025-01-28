import { API_URL } from "../../../constants";

 /** 
this file contains 
1. all api paths.
2. can also be string but someTimes for pagination, we need to return dynamic url based on the parameters
   so we can use the functions.
*/


export const paths = {
    getDashboardData:():string=> `${API_URL}/`
}