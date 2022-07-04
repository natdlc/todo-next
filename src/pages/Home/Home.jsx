import HomePage from "../../components/Home/Home";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <AppNav />
        <HomePage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
