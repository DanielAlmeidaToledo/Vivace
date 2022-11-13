import './Product.css'

import * as Toast from '@radix-ui/react-toast';

import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { useState } from 'react';

const Product = ({ product , addItem }) => {
  const [open, setOpen] = useState(false);

  return <main className="items">

    {product.map((item) => {
      const {name, price, image} = item;
      return (
        <div className="item" key={name}>
          <img src={image} alt="" />
          <p>{name}</p>
          <h3>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
          
            <button className='addCart' onClick={() => addItem(item)}>
              <span>Adicionar</span>
              <MdOutlineAddShoppingCart size={25} className='iconAdd'/>
            </button>

            {/* <Toast.Provider>
              <button className='addCart' 
                onClick={() => 
                  addItem(item) &&
                  setOpen(false)
                  }>
                <span>Adicionar</span>
                <MdOutlineAddShoppingCart size={25} className='iconAdd'/>
              </button>
              <Toast.Root className="ToastRoot" >
                <Toast.Title className="ToastTitle" >Produto adicionado no carrinho</Toast.Title>
                <Toast.Description className="ToastDescription" >{item.name}</Toast.Description>
                <Toast.Action className="ToastAction" altText='addCart'/>
                <Toast.Close />
              </Toast.Root>
              <Toast.Viewport className="ToastViewport" />
            </Toast.Provider> */}

        </div>
      )
    })}
  </main>
}

export default Product