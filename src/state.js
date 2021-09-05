import React, { createContext, useReducer } from "react";

const initialState = {
  notes: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((oldData, action) => {
    switch (action.type) {
      case "note": {
        if (action.value.command === 128) {
          const filteredNotesArr = [...oldData.notes].filter(
            (note) => note.note !== action.value.note
          );
          const newState = {
            notes: [...filteredNotesArr],
          };
          return newState;
        }
        const newState = {
          notes: [...oldData.notes, action.value],
        };
        return newState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
