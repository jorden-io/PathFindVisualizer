import React, { FC } from "react";
import { FaInfo } from "react-icons/fa";
interface Props {}
const Header: FC<Props> = () => {
  return (
    <>
      <div
        style={{
          background: "rgb(14, 14, 14)",
          boxShadow: "0px 0px 7px black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            position: "absolute",
            marginLeft: "80px",
            marginRight: "100%",
            marginTop: "13px",
            padding: "15px",
            paddingRight: "20px",
            paddingLeft: "20px",
            border: "none",
            backgroundColor: "rgb(20,20,20)",
            borderRadius: "3px",
            fontSize: "15px",
          }}
        >
          <FaInfo />
        </button>
        <div style={{}}>
          {/* <h2>key</h2> */}
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                borderRadius: "3px",
                border: "solid 5px indigo",
                backgroundColor: "indigo",
                padding: "5px",
              }}
            ></div>{" "}
            <p style={{ marginRight: "15px", marginLeft: "5px" }}>start node</p>
            <div
              style={{
                borderRadius: "3px",
                border: "solid 5px white",
                backgroundColor: "white",
                padding: "5px",
              }}
            ></div>{" "}
            <p style={{ marginRight: "15px", marginLeft: "5px" }}>end node</p>
            <div
              style={{
                borderRadius: "3px",
                border: "solid 5px grey",
                backgroundColor: "grey",
                padding: "5px",
              }}
            ></div>{" "}
            <p style={{ marginRight: "15px", marginLeft: "5px" }}>wall node</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
