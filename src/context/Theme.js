import React, {createContext, useReducer} from 'react';

const Theme = createContext();

// Nesse ponto, poderia ser usado um simples useState
// Mas será usado reducer para treinar skill

const initialState = {darkMode: false};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'lightmode':
      return {darkMode: false};

    case 'darkmode':
      return {darkMode: true};

    default:
      return state;
  }
};

export {Theme, initialState, themeReducer};
