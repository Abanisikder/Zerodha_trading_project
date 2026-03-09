import { watchlist } from "../components/Data/data";
import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import {DaughnutChart} from "../components/DaughnutChart";
export default function WatchList() {
  const labels=watchlist.map((stock)=>stock['name']);
  const data={
    labels,
    datasets: [
    {
      label: 'stock name',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  }
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search-eg:infy,bse,nifty fut weekly gold mcx"
            className="search"
          />
          <span className="counts">{watchlist.length}/50</span>
        </div>
        <ul className="list">
          {watchlist.map((stack, index) => {
            return <WatchListItem stack={stack} key={index} />;
          })}
        </ul>
        <DaughnutChart data={data}/>
      </div>
    </>
  );
}
const WatchListItem = ({ stack }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);
  let handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };
  let handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stack.isDown ? "down" : "up"}>{stack.name}</p>

        <div className="itemInfo">
          <span className="percent">{stack.percent}</span>
          {stack.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="price">{stack.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListActions id={stack.name}/>}
    </li>
  );
};
const WatchListActions=({id})=>{
  const { openBuyWindow } = useContext(GeneralContext);
  return(
    <>
      <span className="actions">
        <span>
          <Tooltip
          title="Buy(B)"
          placement="top"
          arrow
          TransitionComponent={Grow}

          >
            <button className="buy"onClick={() => openBuyWindow(id)}>Buy</button>
          </Tooltip>
          <Tooltip
          title="sell"
          placement="top"
          arrow
          TransitionComponent={Grow}

          >
            <button className="sell">Sell</button>
          </Tooltip>
          
           <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}

          >
            <button className="action"><BarChartOutlinedIcon className="icon"/></button>
          </Tooltip>
           <Tooltip
          title="more"
          placement="top"
          arrow
          TransitionComponent={Grow}

          >
            <button className="sell"><MoreHoriz/></button>
          </Tooltip>
        </span>

      </span>
    </>
  )
}
