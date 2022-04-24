 
import {Link} from "react-router-dom"

export const Profile = () => {
  return (
    <div className="profile-drop-down-login">
      <Link to="/signin" className="sigin_to">Login <i class="fa fa-user"></i> </Link>
      <Link to="/signup" className="sigin_to">Sign Up <i class="fa fa-user-plus"></i></Link>
    </div>
  );
};
