  import React, { Component } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Switch, Route, Link } from "react-router-dom";
  import "./App.css";

  import AddTodo from "./components/add-todo.component";
  import Todo from "./components/todo.component";
  import TodoList from "./components/todo-list.component";
  
  
  class App extends Component {
    render() {
      return(
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/todos" className="navbar-brand">
              Dev
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/todos"} className="nav-link">
                  To-Do's
                </Link>                
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>            
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/todos"]} component={TodoList} />
              <Route exact path="/add" component={AddTodo} />
              <Route path="/todos/:id" component={Todo} />
            </Switch>
          </div>
        </div>
      );
      // ...
    }
  }

export default App;