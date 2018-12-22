import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount = () => {
    console.log(this.state);
    this.setState({
      ...this.props.contacts.filter(el => el._id === this.props._id)[0]
    });
  };
  editContact = () => {
    this.props.editContactReducer({ ...this.state });
  };

  render() {
    console.log(this.props.contacts);
    return (
      <div className="add-contact-container">
        <h1>Edit Contact</h1>
        Name :
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        Phone :
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        Email :
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Link to="/listcontact">
          <button onClick={this.editContact}>Edit Contact </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editContactReducer: editcontact => {
      dispatch({
        type: "EDIT_CONTACT",
        editcontact
      });
    }
  };
};
//export default EditContact;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);
