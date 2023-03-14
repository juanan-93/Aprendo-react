import React, {useState} from 'react'

const Context = React.createContext({})

export function MenuContextProvider ({children}) {

  const [open, setOpen] = useState(false)

  return <Context.Provider value={{open, setOpen}}>
    {children}
  </Context.Provider>
}

export default Context