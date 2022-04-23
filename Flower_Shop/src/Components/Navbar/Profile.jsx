
import {Link} from "react-router-dom"

export const Profile = () => {
  return (
    <div className="profile-drop-down-login">
      <Link to="/signin" className="sigin_to">Login</Link>
      <Link to="/signup" className="sigin_to">Sign Up</Link>
    </div>
  );
};
