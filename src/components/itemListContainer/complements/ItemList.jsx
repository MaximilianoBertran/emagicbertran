import Item from './Item';
import ModalFinish from './ModalFinish';

const ItemList = (props) => {
    
    const products = props.category ? props.products.filter((item) => item.categories.includes(props.category)) : props.products
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map((item, index) => 
                    (
                        <Item key={index} product={item} />
                    )
                )
            }
            <ModalFinish />
        </div>
    )
}

export default ItemList