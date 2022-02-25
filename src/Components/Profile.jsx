import './Profile.css';

const Profile = () => {
    return(
        <div className="content">
            <img src ="https://cdn.motor1.com/images/mgl/zZ9Wq/s1/2020-audi-rs6-avant.jpg" className="img__content"></img>
            <div>ava+description</div>
      <div>My posts
        <div>
          New Posts
        </div>
        <div className='posts'>
          <div className='item'>
            <a href = "#">Post 1</a>
          </div>
          <div>
          <a href = "#">Post 2</a>
          </div>
          <div>
          <a href = "#">Post 3</a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile;