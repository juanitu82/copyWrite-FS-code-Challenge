// import { createSlice }    from "@reduxjs/toolkit";
// import axios from 'axios'


const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_RESPONSES': {
            return [...state]
        }
        case 'SET_RESPONSE': {
            return [
            {
                palindromo: action.payload.palindromo, 
                text: action.payload.text
            },
            ...state
            ]
        }
        default: return state
    }
}

// const responsesSlice = createSlice({
//   name: "responses",
//   initialState,
//   reducers: {
//     addResponse: (state, action) => {
//        state.push(action.payload);
//    },
//    getResponses: (state, action) => {
//     console.log(state)
//     return state
//    }
//   },
// });

// export const { addResponse, getResponses } = responsesSlice.actions;
// export default responsesSlice.reducer;





//   {
//     palindromo: palindromo(text),
//     data
//   }

// axios.create({
//     method: 'get',
//     baseURL: `localhost:3001/iecho?text=${text}`,
//     responseType: 'json'
//   })
//     .then(function (response) {
//       console.log(response)
//     });

export default reducer