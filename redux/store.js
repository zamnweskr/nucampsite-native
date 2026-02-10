import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from '../features/campsites/campsitesSlice'
import { commentsReducer } from '../features/comments/campsitesSlice'
import { partnersReducer } from '../features/partners/campsitesSlice'
import { promotionsReducer } from '../features/campsites/campsitesSlice'

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }
})