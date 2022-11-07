export default function Home({ channels }) {
  // console.log("channels", channels);
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="container" style={{ padding: "50px 0 100px 0" }}></div>
    </div>
  );
}

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  const data = await fetch(`http://localhost:3000/api/channels/fetchall`);
  const channels = await data.json();
  return {
    props: {
      channels,
    },
  };
};
