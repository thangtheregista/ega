import React from "react";

export default function CustomerItems({currentItems, handleDelete, handleBlockCustomer, handleUnblockCustomer}) {
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
                        <div className="orders_sum">{author.orders.filter(order => order.status === "Đã giao hàng").length}</div>
                    </td>
                    <td>
                        <div className="shippingAddress">{author.shippingAddress}</div>

                    </td>
                    <td>
                        <div className="phone">{author.phone}</div>
                    </td>

                    <td>
                        {!author.isBlocked ? (
                            <button className="block-btn" onClick={() => handleBlockCustomer(author.id)}>Khóa</button>
                        ) : (
                            <button className="unBlock-btn" onClick={() => handleUnblockCustomer(author.id)}>Mở khóa</button>
                        )}
                        <button className="delete-btn" onClick={() => handleDelete(author.id)}>Xóa</button>
                    </td>
                </tr>
            ))}
        </>

    )
}