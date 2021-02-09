import User from "./User.js";
import { Userlist } from "../helpers/constants.js";

const UserList = () => {
  return (
    <div className="App">
      <div>
        {Userlist.map((x) => {
          return <User name={x.name} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
