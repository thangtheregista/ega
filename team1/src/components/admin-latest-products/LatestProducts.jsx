import "./latestProducts.css"
export default function LatestProducts() {
    return (
        <div className="latest-products__card">
            <div className="card__header">Latest products</div>
            <ul className="card__list">
                <li className="card__item">
                    <img className="card__image" src="https://material-kit-react.devias.io/assets/product-5.png" alt="Soja & Co. Eucalyptus"/>
                    <div className="card__info">
                        <p className="card__title">Soja & Co. Eucalyptus</p>
                        <p className="card__date">Updated Jun 26, 2025</p>
                    </div>
                    <div className="card__options">⋮</div>
                </li>
                <li className="card__item">
                    <img className="card__image" src="https://material-kit-react.devias.io/assets/product-5.png" alt="Necessaire Body Lotion"/>
                    <div className="card__info">
                        <p className="card__title">Necessaire Body Lotion</p>
                        <p className="card__date">Updated Jun 26, 2025</p>
                    </div>
                    <div className="card__options">⋮</div>
                </li>
                <li className="card__item">
                    <img className="card__image" src="https://material-kit-react.devias.io/assets/product-5.png" alt="Ritual of Sakura"/>
                    <div className="card__info">
                        <p className="card__title">Ritual of Sakura</p>
                        <p className="card__date">Updated Jun 26, 2025</p>
                    </div>
                    <div className="card__options">⋮</div>
                </li>
                <li className="card__item">
                    <img className="card__image" src="https://material-kit-react.devias.io/assets/product-5.png" alt="Lancome Rouge"/>
                    <div className="card__info">
                        <p className="card__title">Lancome Rouge</p>
                        <p className="card__date">Updated Jun 26, 2025</p>
                    </div>
                    <div className="card__options">⋮</div>
                </li>
                <li className="card__item">
                    <img className="card__image" src="https://material-kit-react.devias.io/assets/product-5.png" alt="Erbology Aloe Vera"/>
                    <div className="card__info">
                        <p className="card__title">Erbology Aloe Vera</p>
                        <p className="card__date">Updated Jun 26, 2025</p>
                    </div>
                    <div className="card__options">⋮</div>
                </li>
            </ul>
            <div className="card__footer">
                <a className="card__footer-link" href="#">View all →</a>
            </div>
        </div>
    )
}