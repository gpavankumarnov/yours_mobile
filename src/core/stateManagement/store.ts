import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { dashboardSlice } from '../../feature/dashboard/store/dashboardSlice'
import { issueTypeSlice } from '../../feature/dashboard/store/referenceData/IssueTypeSlice'

/** 
this file contains 
1. creating store & making it re-usable.
2. creating type for rootreducer, store, dispatch.
*/



//combine slice is a function that combines all slices into single reducer and returns single reducer.
const rootReducer = combineSlices(
    dashboardSlice,
    issueTypeSlice
)


// Infer the `RootState` type from the root reducer
/** ex: type RootState = {
    user: UserState;
    posts: PostsState;
};
**/
export type RootState = ReturnType<typeof rootReducer>


// The store setup is wrapped in `makeStore` to allow reuse
const makeStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer : rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
      },
      preloadedState
    })
}


export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>


