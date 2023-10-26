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
          <h1>My Profile</h1>
        </div>
        <div className="bottom">
          <h2>Edit your profile</h2>
          <div className="col">
            <h4>Photo</h4>
            <div className="right">
              <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <input type="file" name="" id="" />
            </div>
          </div>

          <div className="col">
            <h4>Business Name</h4>
            <input type="text" placeholder='JJ Stores'/>
          </div>

          <div className="col">
            <h4>Email</h4>
            <input type="email" placeholder='omojuwababatunde1@gmail.com' readOnly/>
          </div>

          <div className="col">
            <h4>Phone Number</h4>
            <input type="tel" placeholder='+234-70-810-51-810'/>
          </div>

          <div className="col">
            <h4>Address</h4>
            <input type="tel" placeholder='35, church avenue Kosofe Mile 12'/>
          </div>
          <button>Save Information</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
