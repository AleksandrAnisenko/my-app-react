import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div>
      <UserList/>
      <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />
    </div>
  );
}

export default App;
