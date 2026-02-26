import React from "react";
function Brokarage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row fs-3 text-center mb-5">
          <h2>Charges explained</h2>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <h4 className="text-muted">
              Securities/Commodities transaction tax
            </h4>
            <p className="">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h4 className="text-muted">Transaction/Turnover Charges</h4>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <h4 className="text-muted">Call & trade</h4>
            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <h4 className="text-muted">Stamp charges</h4>
            <p>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
          <div className="col-6  ">
            <h4 className="text-muted">GST</h4>
            <p>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h4 className="text-muted">SEBI Charges</h4>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h4 className="text-muted">DP (Depository participant) charges</h4>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h4 className="text-muted"> Pledging charges</h4>
            <p>₹30 + GST per pledge request per ISIN.</p>
            <h4 className="text-muted">AMC (Account maintenance charges)</h4>
            <p>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
            </p>
            <p>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokarage;
