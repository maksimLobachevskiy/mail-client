import React from "react";
import { connect } from "react-redux";
import { incrementUserAge } from "../../store/actions";

const Footer = (props) => {
  const { currentUser, age, dispatch } = props;

  const incrementAge = () => {
    dispatch(incrementUserAge);
  };
  return (
    <div>
      <h5>&copy; DAN-IT Education 2020</h5>
      <div>
        {currentUser} - {age}
      </div>
      <div>
        <button onClick={incrementAge}>Increment age</button>
      </div>
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    currentUser: store.user,
    age: store.age
  };
};

export default connect(mapStoreToProps)(Footer);
