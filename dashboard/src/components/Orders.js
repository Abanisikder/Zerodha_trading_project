
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"; 
import axios from "axios";

const Orders = () => {

     let [allOrder,setAllOrder]=useState([]);
    useEffect(()=>{
       axios.get("http://localhost:3002/allOrder").then((res)=>{
        setAllOrder(res.data);
      })
    
    },[])
  return (
    <div className="orders">
      <div className="no-orders">
        <p>Your order are</p>
        <div className="order-table">
           <table >
          <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>mode</th>

          </tr>
          {
            allOrder.map((stack,index)=>{
              return(
                <>
                <tr>
                  <td>{stack.name}</td>
                   <td>{stack.qty}</td>
                    <td>{stack.price}</td>
                    <td>{stack.mode}</td>
                </tr>
                </>
              )
            })
          }
        </table>
        </div>


        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;