import "./UserProfile.scss";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ProfileImg from "../../assets/profileImg.png";

type UserProfileProps = {
  // avatarSrc: string;
  username: string;
  styles?: React.CSSProperties;
}


const UserProfile = ({ username, styles }: UserProfileProps) => {
  return (
    <div className="userProfile" style={styles}>
        <img src={ProfileImg} />
        <p>{username}</p>
        <LoginOutlinedIcon />
    </div>
  )
}

export default UserProfile