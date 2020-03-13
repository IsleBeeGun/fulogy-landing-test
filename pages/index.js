import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>fulogy-landing-test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <p>Here is main text</p>
    </main>

    <footer>
      <p>Here is footer text</p>
    </footer>

    <style jsx>{`
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
