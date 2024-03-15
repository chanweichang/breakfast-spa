import React from 'react'
import Title from './spa/Title'
import { Link } from 'react-router-dom';
import QuantityBtn from './QuantityBtn';
import { CartContext } from './CartContext';
import { useContext } from 'react'

export default function Checkout() {

    let {cartItems} = useContext(CartContext);
    let cartEmpty = cartItems.length <=0 ? true : false 

    let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price * product.quantity
    },0);
    const freeDiscount = 100;

    return (
        <div>
            <Title mainTitle="你的購物車" />
            {
                cartEmpty &&
                <div className="nothingInCart">
                    您的購物車現在沒有商品<br/>
                    <Link to = "/">去產品頁看看</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div className="container">
                    <div className="cartSection">
                        <div className="checkoutTable">
                            <tbody>
                                {
                                    /* 產品列表 */
                                    cartItems.map((product)=>(
                                        <tr key={product.id}>
                                            <td>
                                                <Link to = {"/product/"+ product.id}>
                                                    <img src={process.env.PUBLIC_URL+"/pics/"+product.image} alt={product.name}width="300"/>
                                                </Link>
                                            </td>
                                            <td>
                                                <p>名稱：{product.name}</p>
                                                <p>售價：{product.price}</p>
                                                <p>購買數量：{product.quantity}</p>
                                            </td>
                                            <td width="200">
                                                <QuantityBtn productInfo={product}/>
                                            </td>
                                            <td>
                                                <div className="productSubTotal">
                                                    ${product.price*product.quantity}
                                                </div>
                                                
                                            </td>
                                                
                                                
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </div>
                    </div>
                    <div className="checkoutSection">
                        {/* 價錢總數 + 額外訊息 */}
                        <div>全部餐點數量共</div>
                        <div className="grandTotal">{grandTotal}元</div>

                        {
                            grandTotal >= freeDiscount ?
                            <div className="freeDiscount">如有優惠券可以使用較划算</div> :
                            <div className="freeDiscount">滿${freeDiscount}可以使用划算優惠券，不找零<br/></div>
                        }

                        <button>結帳付款</button>
                    </div>
                        
                </div>
            }
        </div>
  )
}
