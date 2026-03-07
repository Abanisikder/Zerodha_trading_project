import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
// এখানে { } ছাড়া ইম্পোর্ট করুন যদি default export হয়ে থাকে
import { GeneralContextProvider } from "./GeneralContext"; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* পুরো এরিয়াকে একটি প্রোভাইডার দিয়ে মুড়িয়ে দিন */}
      <GeneralContextProvider>
        
        <WatchList />
        
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>

      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;