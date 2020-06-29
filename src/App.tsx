import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import HomePage from "./components/HomePage/HomePage";
import { Switch, Route, useHistory } from "react-router-dom";
import Register from "./components/Register/Register";
import { UserCallback, User } from "./shared/shared";
import UserService from "./service/user-service";
import SignIn from "./components/SignIn/SignIn";
import Menu from "./components/Menu/Menu";
import UserManagement from "./components/UserManagement/UserManagement";

export interface DrawCallback {
  (drawSide: boolean): void;
}

interface Props {}

function App() {
  const [drawSide, setDrawSide] = useState(false);
  const drawerToggleClickHandler = () => {
    setDrawSide(!drawSide);
  };
  const backdropClickHandler = () => {
    setDrawSide(false);
  };
  let backDrop;
  if (drawSide) {
    backDrop = <Backdrop click={backdropClickHandler} />;
  }

  // USER STATE
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);
  const [editedUser, setEditedUser] = useState<User | undefined>(undefined);

  const history = useHistory();

  useEffect(() => {
    UserService.getAllUsers().then((users) => setUsers(users));
  }, []);
  
  const handleEditUser: UserCallback = (user) => {
    setEditedUser(user);
    history.push(`/register/${user.id}`);
  };

  const handleSubmitUser: UserCallback = (user) => {
    if (user.id) {
      //Edit
      UserService.updateUser(user).then((edited) => {
        setUsers(users.map((u) => (u.id === edited.id ? user : u)));
      });
    } else {
      //Create
      UserService.createNewUser(user).then((created) => {
        setUsers(users.concat(created));
      });
    }
    history.push("/");
  };
  
  const handleDeleteUser: UserCallback = (user) => {
    UserService.deleteUser(user.id).then((deleted) => {
      setUsers(users.filter((u) => u.id !== deleted.id));
    });
  };

  return (
    <div className="App">
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={drawSide} />
      {backDrop}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/story">
          <h2>Story</h2>
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/login">
          <SignIn user={undefined} onSubmitUser={handleSubmitUser} />
        </Route>
        <Route path="/register">
          <Register user={editedUser} onSubmitUser={handleSubmitUser} />
        </Route>
        <Route path="/usermanagement">
          <UserManagement
            users={users}
            onDeleteUser={handleDeleteUser}
            onEditUser={handleEditUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
