import React from 'react'
import { useState, useEffect} from 'react' //Hook 工具
import { Link } from 'react-router-dom' 
import Title from './spa/Title';
import QuantityBtn from './QuantityBtn';

export default function ProductList() {

  // let productList = [
  //   {
  //     id: 1,
  //     name: "煎蛋漢堡",
  //     price: 35,
  //     image: "eggburger.png"
  //   },
  //   {
  //     id: 2,
  //     name: "火腿蛋漢堡",
  //     price: 40,
  //     image: "spamburger.png"
  //   },
  //   {
  //     id: 3,
  //     name: "卡拉雞腿蛋堡",
  //     price: 80,
  //     image: "calachickenburger.png"
  //   },
  //   {
  //     id: 4,
  //     name: "沙拉",
  //     price: 55,
  //     image: "salad.png"
  //   },
  //   {
  //     id: 5,
  //     name: "蘿蔔糕",
  //     price: 30,
  //     image: "lowbo.png"
  //   },
  //   {
  //     id: 6,
  //     name: "奶茶",
  //     price: 25,
  //     image: "milktea.png"
  //   }
    
  // ]

    let [productList, setProductList] = useState([]);
    //let [input , setInput] = useState('');

  //useEffect
  useEffect(() =>{
    // 1. 無第二個參數 component每次render觸發
    // 2. Dependency Array -> 如果是空的時只會在第一次render時觸發
    //3 : Dependency Array有變數時 -> 第一次網頁render時 + 指定的變數改變 會觸發
    fetch('https://chanweichang.github.io/demoapi/product.json')
    .then(response => response.json())
    .then(data => setProductList(data)) 

    console.log(productList)

  },[ProductList]);


  // useEffect(()=> {
  //   if(input.length>4)
  //     console.log("string long enough");
  //   else
  //     console.log("string too short");
  // },[input])


  // const [showProduct, setShowProduct] = useState(false);



  return (
    <>
      {/* <input type= "text" onChange={e=>setInput(e.target.value)} /> */}

      {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>隱藏產品</button>}
      {!showProduct && <button onClick={()=>{setShowProduct(true)}}>顯示產品</button>} */}
      
      <Title mainTitle="請選擇餐點" />
      
      <div className="container">
        {
          // showProduct && 
          productList.map(product=>(
            <React.Fragment key={product.id}>

              <div className="containerItem">
                <Link to = {"/product/" + product.id}>
                  <img src={process.env.PUBLIC_URL+"/pics/"+product.image} alt="" width="300"/>
                </Link>

                <div className="productName">
                  {product.name} - {product.price} 元/件
                </div>

                <QuantityBtn productInfo={product}/>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </>
  )
}
