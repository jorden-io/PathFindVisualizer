import React, { FC, useEffect, useState } from "react";
import { GiBrickWall } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
import { BiScan } from "react-icons/bi";
import Matrix from "../dataStructures/Matrix";
import Node from "../dataStructures/Node";
interface Props {
  matrix: Matrix;
}
const Grid: FC<Props> = ({ matrix }) => {
  const [wallMode, setWallMode] = useState<boolean>(false);
  const [Speed, setSpeed] = useState<any>();
  const [startX, setStartX] = useState(4);
  const [startY, setStartY] = useState(10);
  const [desX, setDesX] = useState(15);
  const [desY, setDesY] = useState(29);
  const [loading, setLoading] = useState<boolean>(true);
  let q: Array<Node> = [];
  let n: number = 0;

  const breadthFirstNodeFind: Function = (
    speed: number,
    snx: number,
    sny: number,
    dnx: number,
    dny: number,
    matrix: Matrix,
    queue: Array<Node>,
    iter: number,
    current?: Node
  ): void => {
    document.getElementById(`node-${snx}-${sny}`)!.style.backgroundColor =
      "cyan";
    document.getElementById(`node-${dnx}-${dny}`)!.style.backgroundColor =
      "cyan";
    const inter = setInterval(() => {
      iter++;
      queue.push(matrix.matrixGraph[snx][sny]);
      current = queue.shift()!;
      matrix.matrixGraph[dnx][dny].n_val = 5;
      if (iter > 18) {
        clearInterval(inter);
        setTimeout(
          () => {
            pathFind(snx, sny, dnx, dny);
          },
          100 * iter
          // speed >= 25
          //   ? speed < 35
          //     ? 25 * speed
          //     : 50 * speed
          //   : speed < 15
          //   ? 15 * speed
          //   : 25 * speed
        );
        return;
      }

      if (current.back) {
        if (current.back!.n_val === 0) {
          if (!!!current.back!.wall) {
            document.getElementById(
              `node-${current.back!.c_col}-${current.back!.c_row}`
            )!.style.animation = "fade 1s ease";
            queue.push(current.back!);
          }
          current.back!.n_val = 1;
        }
      }
      if (current.next) {
        if (current.next!.n_val === 0) {
          if (!!!current.next!.wall) {
            document.getElementById(
              `node-${current.next!.c_col}-${current.next!.c_row}`
            )!.style.animation = "fade 1s ease";
            queue.push(current.next!);
          }
          current.next!.n_val = 1;
        }
      }
      if (current.up) {
        if (current.up!.n_val === 0) {
          if (!!!current.up!.wall) {
            document.getElementById(
              `node-${current.up!.c_col}-${current.up!.c_row}`
            )!.style.animation = "fade 1s ease";
            queue.push(current.up!);
          }
          current.up!.n_val = 1;
        }
      }
      if (current.down) {
        if (current.down!.n_val === 0) {
          if (!!!current.down!.wall) {
            document.getElementById(
              `node-${current.down!.c_col}-${current.down!.c_row}`
            )!.style.animation = "fade 1s ease";
            queue.push(current.down!);
          }
          current.down!.n_val = 1;
        }
      }
      breadthFirstNodeFind(
        speed,
        snx,
        sny,
        dnx,
        dny,
        matrix,
        queue,
        iter,
        current
      );
    }, 10 * iter);
  };

  const pathFind: Function = (
    snx: number,
    sny: number,
    dnx: number,
    dny: number
  ): void => {
    let xmoves: number = 0;
    let ymoves: number = 0;
    const inter1 = setInterval(() => {
      if (dny > sny && xmoves < dnx - snx) {
        xmoves++;
        document.getElementById(
          `node-${snx + xmoves}-${sny + ymoves}`
        )!.style.backgroundColor = "cyan";
        if (matrix.matrixGraph[xmoves][ymoves].wall) {
          ymoves++;
        }
      }
      if (dnx > snx && ymoves < dny - sny) {
        ymoves++;
        if (
          xmoves >= dnx - snx &&
          matrix.matrixGraph[xmoves][ymoves] != matrix.matrixGraph[dnx][dny]
        ) {
          document.getElementById(
            `node-${snx + xmoves}-${sny + ymoves}`
          )!.style.backgroundColor = "cyan";
        }
      }
      if (xmoves + ymoves > 60) {
        clearInterval(inter1);
        return;
      }
    }, 50);
  };

  // const pathFind: Function = (
  //   snx: number,
  //   sny: number,
  //   dnx: number,
  //   dny: number
  // ): void => {
  //   let xmoves: number = 0;
  //   let ymoves: number = 0;
  //   const inter1 = setInterval(() => {
  //     if (dny > sny && xmoves < dnx - snx) {
  //       xmoves++;
  //       document.getElementById(
  //         `node-${snx + xmoves}-${sny + ymoves}`
  //       )!.style.backgroundColor = "cyan";
  //     }
  //     if (dnx > snx && ymoves < dny - sny) {
  //       ymoves++;
  //       if (
  //         xmoves >= dnx - snx &&
  //         matrix.matrixGraph[xmoves][ymoves] != matrix.matrixGraph[dnx][dny]
  //       ) {
  //         document.getElementById(
  //           `node-${snx + xmoves}-${sny + ymoves}`
  //         )!.style.backgroundColor = "cyan";
  //       }
  //     }
  //     if (xmoves + ymoves > 60) {
  //       clearInterval(inter1);
  //       return;
  //     }
  //   }, 50);
  // };

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <>
        <div>
          <div>
            <input
              className="slider"
              style={{ width: "100%", cursor: "pointer" }}
              type="range"
              min="0"
              max="40"
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
              defaultValue="20"
            />
          </div>
          <div
            style={{
              boxShadow: "0px 0px 6px black",
              display: "grid",
              justifyContent: "center",
            }}
          >
            {matrix.matrixGraph.map((e, i) => {
              return (
                <div style={{}}>
                  {e.map((se, si) => {
                    return (
                      <td
                        id={`node-${se.c_col}-${se.c_row}`}
                        onMouseOver={() => {
                          if (wallMode) {
                            document.getElementById(
                              `node-${se.c_col}-${se.c_row}`
                            )!.style.background = "grey";
                            se.wall = true;
                          }
                        }}
                        onDoubleClick={(e) => {
                          if (!wallMode) {
                            document.getElementById(
                              `node-${se.c_col}-${se.c_row}`
                            )!.style.animation = "choose 0.2s ease-in";
                            e.currentTarget.style.backgroundColor = "indigo";
                            setStartX(se.c_col);
                            setStartY(se.c_row);
                          }
                        }}
                        onClick={(e) => {
                          if (!wallMode) {
                            e.currentTarget.style.backgroundColor = "white";
                            setDesX(se.c_col);
                            setDesY(se.c_row);
                          }
                        }}
                        style={{
                          transition: "1s",
                          cursor: "pointer",
                          border: "solid 1px black",
                          padding: "10px",
                          backgroundColor: "rgb(28, 28, 28)",
                          margin: "auto",
                        }}
                      ></td>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="button-container"
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <button style={{ width: "100px" }}>
            {" "}
            <FaTrashAlt style={{ fontSize: "20px", color: "white" }} />{" "}
          </button>
          <button
            style={{ padding: "20px", width: "100px" }}
            onClick={() => {
              breadthFirstNodeFind(
                Speed,
                startX,
                startY,
                desX,
                desY,
                matrix,
                q,
                n
              );
            }}
          >
            <BiScan style={{ fontSize: "20px" }} />
          </button>
          <button
            onClick={() => setWallMode(true)}
            onDoubleClick={() => setWallMode(false)}
            style={{
              border: wallMode ? "solid 1px lightseagreen" : "none",
            }}
          >
            {" "}
            <GiBrickWall
              style={{
                fontSize: "20px",
              }}
            />
          </button>
        </div>
      </>
    );
  }
};
export default Grid;
