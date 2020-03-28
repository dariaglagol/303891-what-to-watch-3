import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as genre} from "./genre/genre.js";
import {reducer as common} from "./common/common.js";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.GENRE]: genre,
  [NameSpace.COMMON]: common,
  [NameSpace.USER]: user,
});
