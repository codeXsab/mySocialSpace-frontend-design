import Posts from "../../componets/posts/Posts";
import Story from "../../componets/story/Story";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Story />
      <Posts />
    </div>
  );
};
export default Home;
