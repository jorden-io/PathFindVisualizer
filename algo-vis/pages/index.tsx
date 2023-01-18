import { useEffect, useState } from "react";
import Matrix from "@/dataStructures/Matrix";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import { Html } from "next/document";
import Head from "next/head";
import Link from "next/link";

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
        <>
          <Head>
            <Link rel="favicon" href={"../public/favicon.ico"}></Link>
          </Head>
          <Header />
          <Wrapper>
            <Grid matrix={new Matrix(20, 40)} />
          </Wrapper>
        </>
      )}
    </>
  );
}
