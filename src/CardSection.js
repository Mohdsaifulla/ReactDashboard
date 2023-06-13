import React from "react";

const CardSection = (props) => {
  return (
    <div>
      {/* <h1>{props.coinName}</h1> */}
      {/* <h1>{props.sentiments}</h1> */}
      <div
        className="fs-1 fw-bold m-3 text-Capitalize"
        style={{
          fontFamily: "NHaasGroteskDSPro-65Md",
          marginTop: "3px !important",
          marginBottom: "0px !important",
        }}
      >
        {props.coinName}
      </div>
      <section
        className="row m-3 mb-0"
        style={{ marginTop: " 2px !important" }}
      >
        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              Market Cap 24Hrs
            </h6>
            <p className="card-text fw-bold fs-5" style={{ color: "#90eb1a" }}>
              {props.mCap24} %
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              All Time High
            </h6>
            <p className="card-text fw-bold fs-5" style={{ color: "#90eb1a" }}>
              ${props.ath}
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              All Time Low
            </h6>
            <p className="card-text fw-bold fs-5" style={{ color: "#de1428" }}>
              ${props.atl}
            </p>
          </div>
        </div>

        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              Positive Sentiments{" "}
            </h6>
            <p
              className="card-text fw-bold fs-5"
              style={{ color: "#90eb1a" }} //#fcdf03
            >
              {props.sentiment} %
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              {" "}
              High 24Hrs{" "}
            </h6>
            <p
              className="card-text fw-bold fs-5"
              style={{ color: "rgb(51, 255, 0) " }}
            >
              ${props.high24}
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center  m-3"
          style={{
            width: "11rem",
            backgroundColor: "rgb(43, 43, 43)",
            marginTop: "0px !important",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              {" "}
              Low 24Hrs{" "}
            </h6>
            <p
              className="card-text fw-bold fs-5"
              style={{ color: "rgb(255, 32, 32)" }}
            >
              ${props.low24}
            </p>
          </div>
        </div>
      </section>
      <div>
        <div
          className="text-white text-center"
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            overflow: "visible",
            height: "2px",
            marginTop: "1%",
          }}
        >
          {" "}
          Current Price
        </div>
        <div
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            fontSize: "90px",
            fontWeight: "700",
            color: "#fcdf03",
            textDecoration: "none solid rgb(255, 255, 255)",
            textAlign: "center",
          }}
        >
          ${props.currentPrice}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
