
import {Link} from "react-router-dom"

export const Profile = () => {
  return (
    <div className="profile-drop-down-login">
      <Link to="/signin">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
