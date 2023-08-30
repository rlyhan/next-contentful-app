function Home() {
  return <div className="homepage">Hello</div>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
