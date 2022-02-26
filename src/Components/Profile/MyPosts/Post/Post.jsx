import s from './Post.module.css'


const Post = (props) => {
    return(
        <div className={s.item}>
          <img src="https://www.publicdomainpictures.net/pictures/270000/nahled/avatar-people-person-business-u.jpg" className={s.avatar}></img>
          <a href = "#">{props.message}</a>
          <div>
          <span>Like {props.like}</span>
          </div>
        </div>
    )
} 

export default Post;