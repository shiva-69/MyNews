import { createStore  } from "redux"
import { newsReducer } from "./News/Reducer";


const store = createStore(newsReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};



// import { createStore , combineReducers } from "redux"
// import { AddReducer } from "./Repo/Reducer";


// const store = createStore(AddReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export {store};