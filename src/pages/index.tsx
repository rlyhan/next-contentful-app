import { getAllEvents } from "../content-service/queries";
import { fetchQuery } from "../content-service/helpers/graphql";

function Home({ data }) {
  console.log("data:", data);
  return (
    <div className="homepage">
      <h1>Events</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const { loading, error, data } = await fetchQuery(getAllEvents);
  console.log(error);
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default Home;
