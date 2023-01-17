import { useEffect, useState } from "react";
import Matrix from "@/dataStructures/Matrix";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <Wrapper>
          <Header />
          <Grid matrix={new Matrix(20, 40)} />
        </Wrapper>
      )}
    </>
  );
}
