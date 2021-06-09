import { combineReducers } from "redux";
import user from "../user/reducer";
import email from "../email/reducer";

const reducer = combineReducers({
  user,
  email
});

export default reducer;
