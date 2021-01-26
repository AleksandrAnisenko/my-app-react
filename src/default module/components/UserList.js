import USER from "./User.js";
import { USERLIST } from "../helpers/constants.js";
import "../../App.css";

const UserList = () => {
  return (
    <div className="App">
      <div>
        {USERLIST.map((x) => {
          return <USER name={x.name} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
