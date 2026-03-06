
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { positions } from "../components/Data/data";

const Positions = () => {
   let [allPosition,setAllPosition]=useState([]);
useEffect(()=>{
   axios.get("http://localhost:3002/allPositions").then((res)=>{
    setAllPosition(res.data);
  })

},[])
  return (
    <>
      <h3 className="title">Positions({allPosition.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Avg. cost</th>
             <th>P&L</th>
            <th>LTP</th>
            
           
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allPosition.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <>
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
