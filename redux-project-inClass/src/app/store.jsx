import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"


//!configureStore metodu hem bir store oluşturur hemde olştururken farklı reducer ları birleştirir.
const store = configureStore({
    reducer:{
        auth: authReducer,
        news: newsReducer,
    },
})


export default store;