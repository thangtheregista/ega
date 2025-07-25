import React from "react";
import "./AuthorsTable.css";
import anh1 from './images/anh1.jpg';
import anh2 from './images/anh2.jpg';
import anh3 from './images/anh3.jpg';
import anh4 from './images/anh4.jpg';


const authors = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    role: "Manager",
    team: "Organization",
    status: "online",
    date: "23/04/18",
    avatar: anh1
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    role: "Programator",
    team: "Developer",
    status: "offline",
    date: "11/01/19",
    avatar: anh2
  },
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    role: "Executive",
    team: "Projects",
    status: "online",
    date: "19/09/17",
    avatar: anh3
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    role: "Programator",
    team: "Developer",
    status: "online",
    date: "24/12/08",
    avatar: anh4
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    role: "Programator",
    team: "Developer",
    status: "online",
    date: "24/12/08",
    avatar: anh4
  },
   {
    name: "John Michael",
    email: "john@creative-tim.com",
    role: "Manager",
    team: "Organization",
    status: "online",
    date: "23/04/18",
    avatar: anh1
  }
];


export default function AuthorsTable() {
  return (
    <div className="table-container">
      <h2>Authors table</h2>
      <table>
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td className="author-cell">
                <img src={author.avatar} alt={author.name} />
                <div>
                  <div className="name">{author.name}</div>
                  <div className="email">{author.email}</div>
                </div>
              </td>
              <td>
                <div className="role">{author.role}</div>
                <div className="team">{author.team}</div>
              </td>
              <td>
                <span className={`status ${author.status}`}>
                  {author.status.toUpperCase()}
                </span>
              </td>
              <td>{author.date}</td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
