export const initialState = {
        user: 'Augie',
        currentDeck: {
          name: "Math",
          cards: [
              {
                id: 1,
                question: 'What is 2 + 2?',
                answer: '4',
              },
              {
                id: 2,
                question: 'What is 1 + 2?',
                answer: '3',
              },
              {
                id: 3,
                question: 'What is 10 + 10?',
                answer: '20',
              },
            ]
        },
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