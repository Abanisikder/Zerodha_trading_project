import { watchlist } from "../components/Data/data";
import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function WatchList() {
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
    </li>
  );
};
