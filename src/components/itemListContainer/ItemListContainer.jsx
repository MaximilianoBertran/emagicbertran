import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './complements/Item';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const data = [
    {
      name:"Espada", 
      description:"Una espada comun", 
      img:"https://st.depositphotos.com/2907565/4122/v/600/depositphotos_41225075-stock-illustration-cartoon-sword-vector-illustration.jpg",
      stock: 5
    }, {
      name:"Escudo", 
      description:"Un escudo comun", 
      img:"https://st4.depositphotos.com/1472772/31373/i/600/depositphotos_313734032-stock-photo-wooden-medieval-shield-viking-shield.jpg",
      stock: 3
    },
    {
      name:"Collar", 
      description:"Un collar comun", 
      img:"https://thumbs.dreamstime.com/b/amuleto-o-collar-m%C3%A1gico-con-los-dientes-116208253.jpg",
      stock: 1
    },
    {
      name:"Armadura", 
      description:"Una armadura comun", 
      img:"https://www.eviltailors.com/77003-thickbox_default_2x/leather-torso-armour-with-cross-banding.jpg",
      stock: 10
    },
    {
      name:"Casco", 
      description:"Un casco comun", 
      img:"https://thumbs.dreamstime.com/b/planche-el-casco-de-la-armadura-de-la-fantas%C3%ADa-de-vikingo-para-el-juego-o-las-tarjetas-98281702.jpg",
      stock: 8
    }
  ];

  useEffect(() => {
    new Promise( (resolve, reject) => {
      setTimeout(()=> {resolve(data)}, 2000)
    }).then ( result => setProducts(result))
  })
  

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {
        products.map((item, index) => 
          (
            <Item key={index} name={item.name} description={item.description}img={item.img} stock={item.stock} />
          )
        )
      }
    </div>
  )
}

export default ItemListContainer