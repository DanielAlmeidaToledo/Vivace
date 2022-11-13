import { FaSearch } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import * as Popover from '@radix-ui/react-popover';

import './NavBar.css'

const NavBar = ({ cartShop , quantidade: countCart , removeItem }) => {
  var totalPrice = 0;

  return <header className="NavBar" >
    <img src="./../src/media/logo1.png" alt="Logo Vivace" className='logo'/>
    <ul className='nav-ul'>
        <li className="nav-li">
          <input placeholder='Pesquisar...' type="text" name="search" id="search" />
          <FaSearch className='icon-search'/>
        </li>
        <li className="nav-li">
          <a href="">Produtos</a>
        </li>

        <li className="nav-li">
        <Popover.Root>
          <Popover.Trigger className='liCart'>
            <span className='countCart'> {countCart} </span>
            <MdShoppingCart className='iconCart' size={30} />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="cartContent">
              <div className='cartShop'>
                <h3>Carrinho de Compras</h3>
                {cartShop.length === 0 ?
                  <div>
                    <span className='cartVazio'>Nenhum item ainda :(</span>
                    <Popover.Close className="btnBuy" aria-label="Close">Comprar agora</Popover.Close>
                  </div>
                :
                  <div>
                    {cartShop.map((item) => {
                      const { name , price , image , count } = item;
                      totalPrice += item.price;
                      return (
                        <div key={item.image} className='itemCart'>
                          <img src={item.image} alt={item.name} />
                          <div className='infoCart'>
                            <h4>{item.name}</h4>
                            <p className='infoPrice'>{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            <p className='infoQuant'>Quantidade: {item.count}</p>
                          </div>
                          <button onClick={() => removeItem(item)}>
                            <BsTrash className='removeItem' size={20} />
                          </button>
                        </div>
                      )
                    })}
                    <p className='totalPrice'>Valor total: {totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <a href="" className="btnBuy">Finalizar Compra</a>
                  </div>
                }
              </div>
              <Popover.Close className="cartClose" aria-label="Close">
                <AiOutlineClose />
              </Popover.Close>
              <Popover.Arrow className="cartArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        </li>
    </ul>
  </header>
}

export default NavBar