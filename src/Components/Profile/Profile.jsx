import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <img src ="https://cdn.motor1.com/images/mgl/zZ9Wq/s1/2020-audi-rs6-avant.jpg" className={s.img__content}></img>
            <div>ava+description</div>
            <MyPosts />
        </div>
        
    )
}

export default Profile;