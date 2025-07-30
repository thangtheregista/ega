import React from "react";

export default function AuthorItems({currentItems}) {

    return(
        <>
            {currentItems.map((author, index) => (
                <tr key={index}>
                    <td className="author-cell">
                        <img src={author.avatar} alt={author.name} />
                        <div>
                            <div className="name">{`${author.firstName} ${author.lastName}`}</div>
                            <div className="email">{author.email}</div>
                        </div>
                    </td>
                    <td>
                        <div className="role">{author.title}</div>
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
                        <button className="edit-btn">Delete</button>
                        <button className="edit-btn">Reset Password</button>
                    </td>
                </tr>
            ))}
        </>
    )
}