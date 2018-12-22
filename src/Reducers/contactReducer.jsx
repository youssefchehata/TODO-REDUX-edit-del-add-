const initState = [
  {
    _id: "1",
    name: "youssef",
    phone: "2323232323",
    email: "youssef@gmail.com"
  },
  {
    _id: "2",
    name: "hamdi",
    phone: "00000000000000",
    email: "hamdi@gmail.com"
  }
];

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return state.concat(action.newcontact);

    case "EDIT_CONTACT":
      return state.map(el =>
        el._id === action.editcontact._id ? (el = action.editcontact) : el
      );
    case "REMOVE_CONTACT":
      return state.filter(el => el._id !== action._id);
    default:
      return state;
  }
};

//   if (action.type === "REMOVE_CONTACT") {
//     return state.filter(el => el._id !== action._id);
//   } else return state;
// };
export default contactReducer;
