import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FETCH_STATUS from "../../../core/stateManagement/FetchStatus";
import { AppThunk } from "../../../core/stateManagement/store";
import { dashboardApi } from "../Services/api";

interface DashboardSlice {
  data: string[];
  status: FETCH_STATUS;
  error: string | null;
  validCache: boolean;
}

const initialState: DashboardSlice = {
  data: [],
  status: FETCH_STATUS.PRISTINE,
  error: null,
  validCache: false,
};

/**
 we export reducer slice & actions here.
 now we need to add this reducer in combineSlice method
 to tell redux tool kit to include this slice 
 now the state will also provide this data
 so add this slice.
 */
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    //defining actions directly here
    startFetchDashboardData: (state) => {
      state.status = FETCH_STATUS.LOADING;
    },
    finishFetchDashboardData: (
      state,
      action: PayloadAction<{ data: string[] }>
    ) => {
      state.data = action.payload.data;
      state.validCache = true;
      state.status = FETCH_STATUS.IDLE;
      state.error = null;
    },
    httpErrorFetchDashboardData: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = FETCH_STATUS.ERROR;
      state.data = [];
      state.validCache = false;
    },
    // Clears cached data
    invalidateCacheDashboardData: (state) => {
      state.validCache = false;
    },
  },
});

export const {
  startFetchDashboardData,
  finishFetchDashboardData,
  httpErrorFetchDashboardData,
  invalidateCacheDashboardData,
} = dashboardSlice.actions;

//api calls.
/**
  appThunk -> is a type. defines the shape of the Redux thunk structure.
              ensure that thunk action adheres to correct type. 
  Thunk    -> a thunk is a middleware function 
              a part of code that performs
              delayed work, such as asynchronous functions 
            - The HTTP request happens in the background.
              When the request is completed (either resolved or rejected), the JavaScript runtime schedules the corresponding .then() or catch() callback to run.
            - Your function does not stop; it continues executing the next lines of code after the fetch call.




       --Action creator in normal redux --

 const increment = (value: number) => {
  return {              //action object
    type: 'INCREMENT',
    payload: value,
  };
};





  ---Thunk action creator in redux-thunk---

  1. When using middleware like Redux Thunk, action creators can return a function instead of an action object
  2. async funcs -> API request or dispatching multiple actions.


const fetchData = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' }); // Action object

  try {
    const data = await fetch('/api/data').then((res) => res.json());
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Action object
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message }); // Action object
  }
};

In this example:

fetchData: A thunk action creator that returns a function.

Inside the returned function:
Synchronous actions are dispatched using plain action objects.
Async operations (e.g., fetch) are handled, and results are dispatched as action objects.

    */

// (): AppThunk: Indicates that this function returns a thunk action of type AppThunk.
export const fetchAllDashboardData =
  (): AppThunk => async (dispatch, getState) => {
    const { dashboard } = getState();

    if (FETCH_STATUS.LOADING === dashboard.status) {
      return;
    }
    dispatch(startFetchDashboardData());
    try {
      const list: string[] = await dashboardApi.getDashboardData();
      console.log("list", list);
      dispatch(finishFetchDashboardData({ data: list }));
    } catch (error) {
      let errorMessage = "An unknown error occurred while fetching brands";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(httpErrorFetchDashboardData(errorMessage));
    } finally {
      setTimeout(() => dispatch(invalidateCacheDashboardData()), 0);
    }
  };
