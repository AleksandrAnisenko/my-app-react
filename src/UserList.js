import USER from './User'
import {USERLIST} from './constants'
import './App.css';


const UserList = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {USERLIST.map(x=>{
          return  (<USER  
          name = {x.name}/>)
        })}
        </div>
      </header>
    </div>
  );
}

export default UserList;