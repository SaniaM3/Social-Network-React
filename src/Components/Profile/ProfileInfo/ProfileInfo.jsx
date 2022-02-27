import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return(
        <div>
          <div>
            <img src ="https://cdn.motor1.com/images/mgl/zZ9Wq/s1/2020-audi-rs6-avant.jpg" className={s.img__content}></img>
          </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
        
    )
}

export default ProfileInfo;