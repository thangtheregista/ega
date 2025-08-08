import {Link} from "react-router-dom";

export default function ProductItems({currentItems, handleDelete}) {
    return(
        <>
            {currentItems.map(product => (
                <tr>
                    <td><img src={product.pic}/>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.originalPrice}</td>
                    <td>{product.salePrice}</td>
                    <td><span className="stars">{product.rating}</span></td>
                    <td>
                        <Link to={`/ega/dashboard/products/edit/${product.id}`}>
                            <button className="edit-btn">Sửa</button>
                        </Link>
                    </td>
                    <td>
                        <button className="delete-btn" onClick={() => handleDelete(product.id)}>Xoá</button>
                    </td>
                </tr>
            ))}
        </>
    )
}