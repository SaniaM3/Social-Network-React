import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  let postData = [
    {id: 1, message: 'Hi', likesCounte: 16},
    {id: 2, message: 'Hi, how are you?', likesCounte: 39},
    {id: 3, message: 'Oh, yeaa', likesCounte: 82},
    {id: 4, message: 'Hello', likesCounte: 11},
  ]
  
    return(
        <div>
          <ProfileInfo />
          <MyPosts postData = {postData}/>
        </div>
        
    )
}

export default Profile;