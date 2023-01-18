import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
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
      <Link href="https://github.com/JorbyWasTaken/PathFindVisualizer">
        <FaGithub
          style={{
            cursor: "pointer",
            color: "lightseagreen",
            fontSize: "35px",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "20",
            width: "100%",
          }}
        />
      </Link>
    </>
  );
};
export default Wrapper;
