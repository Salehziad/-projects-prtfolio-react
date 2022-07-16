import { useLocation, useParams } from "react-router-dom";
import React from 'react';
// import { useLocation } from "react-router-dom";
export default function SignUpLogs() {
  const location =useLocation()
  // users=location.state;
  let users=location.state;
  console.log("llll",users)
  const listId = users.map((link) =>
  <li key={link.id}>{link.id}</li> 
  );
  const listName = users.map((link) =>
  <li key={link.name}>{link.name}</li> 
  );
  const listEmail = users.map((link) =>
  <li key={link.email}>{link.email}</li> 
  );
  const listDate = users.map((link) =>
  <li key={link.date}>{link.date}</li> 
  );
  const listRole = users.map((link) =>
  <li key={link.role}>{link.role}</li> 
  );
  const listMethod = users.map((link) =>
  <li key={link.method}>{link.method}</li> 
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

