import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Wrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default Wrapper;
