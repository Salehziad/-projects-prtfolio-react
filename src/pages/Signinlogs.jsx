import React from 'react';
import { useLocation } from "react-router-dom";
export default function Signinlogs() {
  const location = useLocation();
  console.log(location.state.log)
  let users=location.state.log;
  const listId = users.map((link) =>
  <li >{link.id}</li> 
  );
  const listName = users.map((link) =>
  <li >{link.name}</li> 
  );
  const listEmail = users.map((link) =>
  <li >{link.email}</li> 
  );
  const listDate = users.map((link) =>
  <li >{link.date}</li> 
  );
  const listRole = users.map((link) =>
  <li >{link.role}</li> 
  );
  const listMethod = users.map((link) =>
  <li >{link.method}</li> 
  );

    return (
      <div className="Signinlogs">
        <div className="column">
          <p>Id</p>
          <ul>
        {
          listId
        }
          </ul>
        </div>
        <div className="column">
          <p>Name</p>
          <ul>
        {
          listName
        }
          </ul>
        </div>
        <div className="column">
          <p>Email</p>
          <ul>
        {
          listEmail
        }
          </ul>
        </div>
        <div className="column">
          <p>Date</p>
          <ul>
        {
          listDate
        }
          </ul>
        </div>
        <div className="column">
          <p>Role</p>
          <ul>
        {
          listRole
        }
          </ul>
        </div>
        <div className="column">
          <p>Method</p>
          <ul>
        {
          listMethod
        }
          </ul>
        </div>
      </div>
    );
  }
    
      // todos.map((todo) => (
      //   <p key={todo.id}>
      //     {todo.text} - {todo.status}
      //   </p>
      // ))

