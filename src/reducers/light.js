import update from "immutability-helper";


const initialState = {
  lightbulbs: [
  { id: 1, 
    flashed: false, 
  },
  { id: 2, 
    flashed: false, 
  },
  { id: 3, 
    flashed: true, 
  },
  { id: 4, 
    flashed: true, 
  }],
};

function lightReducer(state = initialState, action) {
  switch (action.type) {
    case 'LIGHTBULBS_CLICKED':
const changeState = state.lightbulbs.slice();
      let indexToUpdate;
     changeState.forEach((lightbulb, index) => {
        if (lightbulb.id === action.payload.id) {
          indexToUpdate = index;
           state.lightbulbs[indexToUpdate].flashed=!state.lightbulbs[indexToUpdate].flashed
          
        }
      });

      return update(state, {
        $merge:
          {
            lightbulbs: changeState,
          }
        });
      default:
      return state
  }
}
export default lightReducer;
