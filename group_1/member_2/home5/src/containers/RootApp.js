import React from "react";
import {connect} from "react-redux";
import Mouse from "../components/Mouse/Mouse";
import {Hit,Start} from "../components/Mouse/MouseRedux";

const mapStateToProps = (state) => {
    return {
        value: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // onIncrement: () => dispatch(Inc()),
        // onDecrement: () => dispatch(Dec())
        onHit: (id) => dispatch(Hit(id)),
	    onStart: () => dispatch(Start())
    }
};
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Mouse);

export default RootApp;