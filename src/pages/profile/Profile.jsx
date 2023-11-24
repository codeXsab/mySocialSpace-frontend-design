import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./profile.scss";

import Posts from "../../componets/posts/Posts";
const Profile = () => {
  return (
    <div className="posts-profile-container">
      <div className="profile">
        <div className="image-container">
          <img
            className="cover-image"
            src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="profile-image"
            src="https://images.unsplash.com/photo-1698849469142-6c828cfdfd95?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="profile-container">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://x.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <div className="info">Profile Name </div>
          </div>
          <div className="right">
            <button>follow</button>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};
export default Profile;
