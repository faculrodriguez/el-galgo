import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, desc }) => {
    return (
        <div className='contenedorItem'>
            <img className='imgDetail' src={img} alt={nombre} />
            <h2>{nombre} </h2>
            <h3>Precio: ${precio} </h3>
            <p>Descripcion: {desc} </p>
            <h5>ID: {id} </h5>
        </div>
    )
}

export default ItemDetail