import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return(
        <div>
          <ProfileInfo />
          <MyPosts 
            postData = {props.postData} 
            dispatch = {props.dispatch} 
            // updateNewPostText = {props.updateNewPostText}
            newPostText = {props.newPostText}
            />
        </div>
        
    )
}

export default Profile;