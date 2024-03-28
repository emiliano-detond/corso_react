import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [
      {
        id: 0,
        title: "Tokyo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?",
        imgUrl:
          "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvfGVufDB8fDB8fHww",
        isVisited: true,
      },
      {
        id: 1,
        title: "New York",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?",
        imgUrl:
          "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
        isVisited: false,
      },
      {
        id: 2,
        title: "Rome",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?",
        imgUrl:
          "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D",
        isVisited: true,
      },
      {
        id: 3,
        title: "Paris",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?",
        imgUrl:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
        isVisited: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
