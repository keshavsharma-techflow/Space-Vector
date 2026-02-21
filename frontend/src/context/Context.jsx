import {createContext} from 'react';
import {useState} from 'react';

export const conData = createContext(null);

export function ConFun({children}){
      let[login,setLogin] = useState(true);
    const obj={
     login,
     setLogin
    }
    return(
        <conData.Provider value={obj}>
          {children}
        </conData.Provider>
    )
}