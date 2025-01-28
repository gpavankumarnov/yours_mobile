import { fromReferenceDataList, ReferenceData } from "../../feature/dashboard/model/referenceData/referenceDataModel";
import apiClient from "../../feature/dashboard/Services/axiosInstance";
import { referenceDataApiPaths } from "./referenceDataApiPaths";

export const referenceDataApi = {
  getAllIssueTypes: async () => {
    const { data } = await apiClient.get(referenceDataApiPaths.getAllIssueTypes());
    return data.map((val: ReferenceData) => fromReferenceDataList(val));
  },
};
