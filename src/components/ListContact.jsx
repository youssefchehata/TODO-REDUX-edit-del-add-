import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ListContact extends Component {
  deleteContact = el => {
    this.props.deleteContactReducer(el);
  };
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    const ListContact = contacts.map(contact => {
      return (
        <div class="responsive-table">
          <table key={contact._id}>
            <thead>
              <tr>
                <th>Name</th>
                <th>phone</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <button
                  onClick={() => this.deleteContact(contact._id)}
                  className="waves-effect waves-light btn-small"
                >
                  Delete
                </button>

                <Link to={`/editcontact/${contact._id}`}>
                  <button className="waves-effect waves-light btn-small">
                    edit
                  </button>
                </Link>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
    return (
      <div className="container">
        <h1 className="center">Redux</h1>
        <p className="center">This is todo&redux section</p>
        {ListContact}
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
    deleteContactReducer: _id => {
      dispatch({
        type: "REMOVE_CONTACT",
        _id
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContact);
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteContact: id => {
//       dispatch(deleteContact(_id));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListContact);
