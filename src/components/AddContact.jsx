import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class AddContact extends Component {
  state = {
    name: ""
  };
  handelChange = e => {
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addContact = () => {
    this.props.addContactReducer({
      ...this.state,
      _id: "" + Math.random() * 100000
    });
  };
  render() {
    return (
      <div>
        Name:
        <input type="text" name="Name" onChange={this.handelChange} />
        phone:
        <input type="number" name="phone" onChange={this.handelChange} />
        email:
        <input type="email" name="email" onChange={this.handelChange} />
        <Link to="/listContact">
          <button
            onClick={() => this.addContact()}
            className="waves-effect waves-light btn-small"
          >
            Add-Contact
          </button>
        </Link>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     contacts: state.contactReducer
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    addContactReducer: newcontact => {
      dispatch({
        type: "ADD_CONTACT",
        newcontact
      });
    }
  };
};
export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(AddContact);
