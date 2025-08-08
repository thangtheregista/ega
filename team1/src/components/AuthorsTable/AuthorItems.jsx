import React from "react";
import {Link} from "react-router-dom";

export default function AuthorItems({currentItems, handleDelete}) {
    return(
        <>
            {currentItems.map((author) => (
                <tr key={author.id}>
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
                        <Link to={`/ega/dashboard/staff/edit/${author.id}`}><button className="edit-btn">Sửa</button></Link>
                        <button className="delete-btn" onClick={() => handleDelete(author.id)}>Xóa</button>
                    </td>
                </tr>
            ))}
        </>
    )
}