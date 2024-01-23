import React from "react";
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({id, nombre, precio, img}) => {
    return (
        <div className="cardProducto" >
            <img src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p>Precio: ${precio} </p>
            <h5>ID: {id} </h5>
            <Link to={`/item/${id}`} > Detalles </Link>

        </div>
    )
}

export default Item