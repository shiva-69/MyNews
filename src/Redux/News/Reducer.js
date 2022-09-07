import { NEWS } from "./Actions";

export const newsReducer = (store = {news : {}}, {type, payload}) => {
    switch (type){
        case NEWS : 
            return {
                ...store, 
                news: payload
            }
        default :
            return store;
    }
}



// import { ADD_REPO } from "./Actions";

// export const AddReducer = (store = {add : {}}, {type, payload}) => {
//     switch (type){
//         case ADD_REPO : 
//             return {
//                 ...store, add : payload
//             }
//         default :
//             return store;
//     }
// }