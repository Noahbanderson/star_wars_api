import React, {useState} from 'react'

export const PeepContext = React.createContext()


export const PeepProvider = (props) => {
  const [peeps, setpeeps] = useState([])
  
  return (
    <PeepContext.Provider value={{peeps, setpeeps}}> 
      {props.children}
    </PeepContext.Provider>
  )
}


