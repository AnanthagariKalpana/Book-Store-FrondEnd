import { createSlice } from "@reduxjs/toolkit";

const bookSlice =createSlice({
    name: "book",
  initialState: {
    bookData: [],
    searchData:[]
  },
  reducers:{
    setBookData:(state, action)=>{
        state.bookData= action.payload;
        state.searchData=action.payload;
    }
  }
})

export const{setBookData}=bookSlice.actions
export default bookSlice.reducer;