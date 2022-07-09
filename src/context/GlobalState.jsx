import { useReducer } from "react";
import { createContext } from "react";  
import { AppReducer } from "./AppReducer";

//initialize global state
const InitialState = {
     transactions: [    //transactions array
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Camera', amount: -100 },
            { id: 4, text: 'Gum', amount: -5 },
            { id: 5, text: 'Book', amount: -10 },
     ]
}

export  const GlobalContext = createContext(InitialState);  //create context

export const GlobalProvider = ({ children }) => {
    // eslint-disable-next-line no-undef
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}