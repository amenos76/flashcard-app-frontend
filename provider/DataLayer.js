import React, { createContext, useContext, useReducer, Component } from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);

// class DataLayer extends Component {

//   state = {
//     name: 'Augie',
//     currentDeck: {
//       name: "Programming",
//       cards: "cards"
//     },
//   }

//   SAMPLE_FLASHCARDS = [
//     {
//       id: 1,
//       question: 'What is 2 + 2?',
//       answer: '4',
//     },
//     {
//       id: 2,
//       question: 'What is 1 + 2?',
//       answer: '3',
//     },
//     {
//       id: 3,
//       question: 'What is 10 + 10?',
//       answer: '20',
//     },
//   ]

//   setName = (name) => {
//     this.setState({name: name})
//   }

//   setCurrentDeck = (currentDeck) => {
//     this.setState({currentDeck: currentDeck})
//   }

//   render() {
//     return (
//       <DataLayerContext.Provider values={{
//           name: this.state.name,
//           currentDeck: this.state.currentDeck,
//           setName: this.setName,
//           setCurrentDeck: this.setCurrentDeck
//           }}
//         >
//         {this.props.children}
//       </DataLayerContext.Provider>
//     )
//   }
// };

// export { DataLayer, DataLayerContext};

