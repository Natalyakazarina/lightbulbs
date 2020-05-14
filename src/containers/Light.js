import {connect} from 'react-redux';
import Light from "../components/Light";

const mapStateToProps = state => {
  return {
    lightbulbs: state.lightReducer.lightbulbs,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onItemClicked: (id) => dispatch({
      type: 'LIGHTBULBS_CLICKED',
      payload: {
        id,
      }
    }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Light);