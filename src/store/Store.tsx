import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "./UserReducer";
import storage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore} from 'redux-persist'
import { thunk } from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    userReducer : UserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const rootStore = createStore(persistedReducer, applyMiddleware(thunk));
export const persistentStore = persistStore(rootStore);

export type RootState = ReturnType<typeof rootReducer>;
