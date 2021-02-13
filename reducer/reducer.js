import { getData } from '../utilities/api'

const SAMPLE_DECKS = getData()

export const initialState = {
        user: "Augie",
        userDecks: SAMPLE_DECKS,
        
};

const reducer = (state, action) => {
  console.log(action);
  
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    default: 
      return state;
  }
}

export default reducer