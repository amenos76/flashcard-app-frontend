import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { reducer, initialState } from '../reducer/reducer'

export const DataLayerContext = createContext()


export const DataLayerProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <DataLayerContext.Provider value={{state, dispatch}}>
      {children}
    </DataLayerContext.Provider>
  )
}