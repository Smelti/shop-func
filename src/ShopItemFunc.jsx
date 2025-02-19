import PropTypes from "prop-types"
import "./ShopItemFunc.css"

export function ShopItemFunc({item}) {
    return (
        <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
            <div className="highlight-overlay" />
        </div>
        <div className="purchase-info" />
        <div className="price">
            {item.currency + item.price.toFixed(2)}
            <button className="button" id="btn">Добавить в корзину</button>
        </div>     
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};