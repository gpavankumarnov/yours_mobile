import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { referenceDataApi } from "../../../../common/utils/referenceDataApi";
import FETCH_STATUS from "../../../../core/stateManagement/FetchStatus";
import { AppThunk, RootState } from "../../../../core/stateManagement/store";
import {
    getReferenceDataCacheTTL,
    ReferenceData,
} from "../../model/referenceData/referenceDataModel";

/** when making api calls
we need these details:

1. data
2. status (loading, success, error) whether api success or fail.
3. error if error occurs while api call.
4. valid cache (to check if the data is from cache or not)



*/

interface IssueTypeSliceState {
  data: ReferenceData[];
  status: FETCH_STATUS;
  error: string | null;
  isValidCache: boolean;
}

const initialState: IssueTypeSliceState = {
  data: [],
  status: FETCH_STATUS.PRISTINE,
  error: null,
  isValidCache: false,
};

export const issueTypeSlice = createSlice({
  name: "issueTypes",
  initialState,
  reducers: {
    startFetchIssueTypes: (state) => {
      state.status = FETCH_STATUS.LOADING;
    },
    finishFetchIssueTypes: (
      state,
      action: PayloadAction<{ data: ReferenceData[] }>
    ) => {
      state.data = action.payload.data;
      state.status = FETCH_STATUS.IDLE;
      state.error = null;
      state.isValidCache = true;
    },
    httpErrorFetchIssueTypes: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = FETCH_STATUS.ERROR;
      state.data = [];
      state.isValidCache = false;
    },
    // Clears cached data
    invalidateCacheIssueTypes: (state) => {
      state.isValidCache = false;
    },
  },
});

export const {
  startFetchIssueTypes,
  finishFetchIssueTypes,
  httpErrorFetchIssueTypes,
  invalidateCacheIssueTypes,
} = issueTypeSlice.actions;

//middlewares

export const fetchAllIssueTypes = (): AppThunk => async (dispatch, getState) => {

    //get slice state and check the status
  // simply exit from func by returning if its loading

  /** else
         try catch block - to make an api call.
                         - update state if response is successful
                         - update state with error if response fails.
         */

    const { issueTypes } = getState();
    if (issueTypes.status === FETCH_STATUS.LOADING) {
      return;
    }
  
    dispatch(startFetchIssueTypes());
    try {
      const response = await referenceDataApi.getAllIssueTypes();
      dispatch(finishFetchIssueTypes({ data: response }));
    } catch (error) {
      console.log(error);
      let errorMessage = "An unknown error occurred while fetching AccountingTypes";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(httpErrorFetchIssueTypes(errorMessage));
    } finally {
      setTimeout(
        () => dispatch(invalidateCacheIssueTypes()),
        getReferenceDataCacheTTL()
      );
    }
  };
  

export const selectIssueTypeIsFetchError = (state: RootState): boolean =>
    state.issueTypes.status === FETCH_STATUS.ERROR
  export const selectIssueTypeIsFetching = (state: RootState): boolean =>
    state.issueTypes.status === FETCH_STATUS.LOADING
  export const selectIssueTypes = (state: RootState): ReferenceData[] => state.issueTypes.data
  