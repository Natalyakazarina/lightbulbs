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
    case "LIGHTBULBS_CLICKED":
      let indexToUpdate;
      state.lightbulbs.forEach((lightbulb, index) => {
        if (lightbulb.id === action.payload.id) {
          indexToUpdate = index;
          
        }
      });

      return update(state, {
        lightbulbs: {
          [indexToUpdate]: {
            flashed: {
              $set: !lightbulbs[indexToUpdate].flashed,
            },
          },
        },
      });
      default:
      return state
  }
}
export default lightReducer;
