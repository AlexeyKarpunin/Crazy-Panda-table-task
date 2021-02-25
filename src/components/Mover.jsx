import React from 'react';

const MoveProv = React.createContext();

export default function Mover ({children}) {

  


  return (
    <MoveProv.Provider>
      {children}
    </MoveProv.Provider>
  );
}