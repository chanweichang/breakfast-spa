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
                <div>
                    您的購物車現在沒有商品<br/>
                    <Link to = "/">去產品頁看看</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div>
                    <div id="cartSection">
                        {
                            /* 產品列表 */
                            cartItems.map((product)=>(
                                <div key={product.id}>
                                    <img src={process.env.PUBLIC_URL+"/pics/"+product.image} width="300"/>
                                    {product.name};
                                    {product.price};
                                    購買數量：{product.quantity};
                                    <QuantityBtn productInfo={product}/>
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkoutSection">
                        {/* 價錢總數 + 額外訊息 */}
                        <div>全部餐點數量共</div>
                        <div>{grandTotal}元</div>

                        {
                            grandTotal >= freeDiscount ?
                            <div>如有優惠券可以使用較划算</div> :
                            <div>滿${freeDiscount}可以使用划算優惠券，不找零<br/></div>
                        }
                    </div>
                        
                </div>
            }
        </div>
  )
}
