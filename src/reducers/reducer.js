import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as common} from "./common/common.js";
import {reducer as user} from "./user/user.js";
import {reducer as error} from "./common-error/common-error.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.COMMON]: common,
  [NameSpace.USER]: user,
  [NameSpace.ERR0R]: error,
});
