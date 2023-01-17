import React, { FC } from "react";
interface Props {}
const Header: FC<Props> = () => {
  return (
    <>
      <div>
        <div style={{}}>
          <h2>key</h2>
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
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
