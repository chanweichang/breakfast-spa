import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Title from './spa/Title';
import QuantityBtn from './QuantityBtn';

export default function ProductDetail() {

    let params = useParams();
    let [productDetail,setProductDetail]= useState(null);

    useEffect(() =>{
        // 1. 無第二個參數 component每次render觸發
        // 2. Dependency Array -> 如果是空的時只會在第一次render時觸發
        //3 : Dependency Array有變數時 -> 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('https://chanweichang.github.io/demoapi/product.json')
        .then(response => response.json())
        .then(data => {
            let productInfo = data.find((element)=>{
                return element.id === parseInt(params.id);
            })
            setProductDetail(productInfo);
        })
    
},[params.id]);  //ependency array

  return (
    <div>
        {
            productDetail &&
            <div className="productDetail">
                <Title mainTitle={productDetail.name+"產品資料"}/>

                <table width="100%">
                    <tbody>
                        <tr>
                            <td align="center">
                                <img src={process.env.PUBLIC_URL+"/pics/"+productDetail.image} alt={productDetail.name} width="400px"/>
                            </td>
                            <td width="45%" padding="10">
                                <p>名稱：{productDetail.name}</p>
                                <p>售價：{productDetail.price}</p>
                                <QuantityBtn productInfo={productDetail}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        }
        <Link to ="/" >
            <div className="backToGoodsLisBtn">
                回產品列表
            </div>
        </Link>
    </div>
  )
}
