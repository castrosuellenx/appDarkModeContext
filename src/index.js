import React, {useReducer} from 'react';

import {Theme, themeReducer, initialState} from './context/Theme';
import Main from './screens/Main';

export default function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <Theme.Provider value={{state: state, dispatch: dispatch}}>
      <Main />
    </Theme.Provider>
  );
}
