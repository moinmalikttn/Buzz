import { createContext } from "react";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("authusers")) || null,
    isFetching: false,
    error: false,
};


export const AuthContext = createContext(INITIAL_STATE);