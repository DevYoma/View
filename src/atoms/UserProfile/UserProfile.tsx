import "./UserProfile.scss";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

type UserProfileProps = {
  avatarSrc: string;
  username: string;
}


const UserProfile = ({ avatarSrc, username }: UserProfileProps) => {
  return (
    <div className="userProfile">
        <img src={avatarSrc} />
        <p>{username}</p>
        <LoginOutlinedIcon />
    </div>
  )
}

export default UserProfile