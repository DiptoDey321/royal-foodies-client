import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

function Authentication({children}) {
    const user = {display : "Dipto"}
    const authInfo = {user}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authentication