import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Profile</h1>
        </div>
        <div className="bottom">
          <div className="left">
               <img
               src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
               alt=""
               className="avatar"
               />
          </div>
          <div className="right">
            <div className="col">
               <h3>UserName</h3>
               <p>Omojuwa Babatunde</p>
            </div>
            
            <div className="col">
               <h3>Email Address</h3>
               <p>omojuwababatunde1@gmail.com</p>
            </div>

            <div className="col">
               <h3>Business Name</h3>
               <p>Omojuwa Stores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
