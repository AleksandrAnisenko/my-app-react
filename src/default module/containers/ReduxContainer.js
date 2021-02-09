import React from "react";
import Button from "@material-ui/core/Button";
import { loginRequest } from "../../actions/index";
import { connect } from "react-redux";

class ReduxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  testMethod = () => {
    this.props.loginRequest("test");
  };
  render() {
    return (
      <Button onClick={this.testMethod}>Button for Redux and Axios</Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (value) => dispatch(loginRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);
