import React from "react";

export default function CustomerItems({currentItems}) {
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
                        <div className="email">{author.location}</div>

                    </td>
                    <td>
                        <div className="email">{author.phone}</div>
                    </td>

                    <td>
                        <button className="edit-btn">Block</button>
                        <button className="edit-btn">Reset Password</button>
                    </td>
                </tr>
            ))}
        </>

    )
}