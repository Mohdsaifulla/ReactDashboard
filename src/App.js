import React, { useState, useEffect } from "react";
import CardSection from "./CardSection";
import Header from "./Header";
import ChartSection from "./ChartSection";

export default function App() {
  const [Id, setId] = useState("bitcoin");
  const [Data, setData] = useState({});

  const fetchData = async () => {
    let data = await fetch("https://api.coingecko.com/api/v3/coins/" + Id);
    let JsonData = await data.json();
    setData(JsonData);
  };

  const handleSubmit = async (event) => {
    // event.preventDefault()
    await setId(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [Id]);

  return (
    <div>
      <Header handle_Submit={handleSubmit} />
      <CardSection
        coinName={Data.name}
        currentPrice={
          Data.market_data ? Data.market_data.current_price["usd"] : ""
        }
        mCap24={
          Data.market_data
            ? Data.market_data.market_cap_change_percentage_24h
            : ""
        }
        ath={Data.market_data ? Data.market_data.ath.usd : ""}
        atl={Data.market_data ? Data.market_data.atl.usd : ""}
        sentiment={Data.sentiment_votes_up_percentage}
        high24={Data.market_data ? Data.market_data.high_24h["usd"] : ""}
        low24={Data.market_data ? Data.market_data.low_24h["usd"] : ""}
      />
      <ChartSection
        Id={Id}
        priceChange24={
          Data.market_data
            ? Data.market_data.price_change_24h_in_currency.usd
            : ""
        }
        MarketCap={Data.market_data ? Data.market_data.market_cap.usd : ""}
        TotVol={Data.market_data ? Data.market_data.total_volume.usd : ""}
        Circulating={
          Data.market_data ? Data.market_data["circulating_supply"] : ""
        }
        twitterF={
          Data.community_data ? Data.community_data.twitter_followers : ""
        }
      />
    </div>
  );
}
