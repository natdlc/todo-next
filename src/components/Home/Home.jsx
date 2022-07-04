import List from "./List";

const Home = () => {
  return (
    <>
      <div className="max-w-lg flex flex-col mx-auto w-5/6">
        <List />
        <button className="block border border-black w-28 py-2 rounded-full hover:bg-black hover:text-white">Add</button>
      </div>
    </>
  );
};

export default Home;
