import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ChartSection = (props) => {
  const [chartData, setChartData] = useState({
    Price: {
      options: {
        chart: {
          id: "area-datetime",
        },
        grid: {
          show: false,
        },
        title: {
          text: "Market Price (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#32ed28",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#32ed28"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
        selection: 365,
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: "100%",
            },
          },
        },
      ],
      series: [
        {
          name: "Market Price",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Market_Cap: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Cap (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#de1428",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#de1428"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Cap (USD)",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Tot_Vol: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Volume",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#00ffea",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#00ffea"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Volume",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
  });
  const [prevId, setPrevId] = useState(props.Id);
  const [prevSelection, setPrevSelection] = useState(
    chartData.Price.options.selection
  );

  const fetchData = async () => {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        props.Id +
        "/market_chart?vs_currency=usd&days=" +
        chartData.Price.options.selection
    );
    let jsonChartData = await response.json();

    setChartData((prevChartData) => ({
      ...prevChartData,
      Price: {
        options: prevChartData.Price.options,
        series: [{ name: "Market Price", data: jsonChartData.prices }],
      },
      Market_Cap: {
        options: prevChartData.Market_Cap.options,
        series: [{ name: "Market Price", data: jsonChartData.market_caps }],
      },
      Tot_Vol: {
        options: prevChartData.Tot_Vol.options,
        series: [{ name: "Market Price", data: jsonChartData.total_volumes }],
      },
    }));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (
      prevId !== props.Id ||
      prevSelection !== chartData.Price.options.selection
    ) {
      fetchData();
      setPrevId(props.Id);
      setPrevSelection(chartData.Price.options.selection);
    }
  }, [props.Id, chartData.Price.options.selection, prevId, prevSelection]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col" style={{ maxWidth: "610px" }}>
            <div id="chart">
              <div className="toolbar">
                <button
                  id="one_month"
                  onClick={() =>
                    setChartData((prevChartData) => ({
                      ...prevChartData,
                      Price: {
                        options: {
                          ...prevChartData.Price.options,
                          selection: 1,
                        },
                        series: prevChartData.Price.series,
                      },
                    }))
                  }
                >
                  1D
                </button>
                &nbsp;
                <button
                  id="six_months"
                  onClick={() =>
                    setChartData((prevChartData) => ({
                      ...prevChartData,
                      Price: {
                        options: {
                          ...prevChartData.Price.options,
                          selection: 7,
                        },
                        series: prevChartData.Price.series,
                      },
                    }))
                  }
                >
                  1W
                </button>
                &nbsp;
                <button
                  id="one_year"
                  onClick={() =>
                    setChartData((prevChartData) => ({
                      ...prevChartData,
                      Price: {
                        options: {
                          ...prevChartData.Price.options,
                          selection: 30,
                        },
                        series: prevChartData.Price.series,
                      },
                    }))
                  }
                >
                  1M
                </button>
                &nbsp;
                <button
                  id="ytd"
                  onClick={() =>
                    setChartData((prevChartData) => ({
                      ...prevChartData,
                      Price: {
                        options: {
                          ...prevChartData.Price.options,
                          selection: 182,
                        },
                        series: prevChartData.Price.series,
                      },
                    }))
                  }
                >
                  6M
                </button>
                &nbsp;
                <button
                  id="all"
                  onClick={() =>
                    setChartData((prevChartData) => ({
                      ...prevChartData,
                      Price: {
                        options: {
                          ...prevChartData.Price.options,
                          selection: 365,
                        },
                        series: prevChartData.Price.series,
                      },
                    }))
                  }
                >
                  1Y
                </button>
              </div>
              <Chart
                options={chartData.Price.options}
                series={chartData.Price.series}
                type="area"
                height="400"
                width="600"
              />
            </div>
          </div>
          <div className="col" style={{ maxWidth: "200px" }}>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {" "}
                Market Cap{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                $ {props.MarketCap}
              </p>
            </div>

            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {" "}
                Price Change 24hrs{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                $ {props.priceChange24}
              </p>
            </div>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {" "}
                Total Volume{" "}
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                $ {props.TotVol}
              </p>
            </div>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {" "}
                Circulating Supply
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                {props.Circulating}
              </p>
            </div>
            <div className="card-body ">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                {" "}
                Twitter Followers
              </h6>
              <p
                className="card-text fw-bold "
                style={{
                  fontFamily: "NHaasGroteskDSPro-65Md",
                  color: "rgb(255, 255, 255)",
                  fontSize: "small",
                }}
              >
                {props.twitterF}
              </p>
            </div>
          </div>
          <div className="col" style={{ maxWidth: "310px" }}>
            <div>
              <Chart
                options={chartData.Market_Cap.options}
                series={chartData.Market_Cap.series}
                type="line"
                height="200"
                width="300"
              />
            </div>
            <div>
              <Chart
                options={chartData.Tot_Vol.options}
                series={chartData.Tot_Vol.series}
                type="line"
                height="200"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
