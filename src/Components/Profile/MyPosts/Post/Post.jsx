import s from './Post.module.css'


const Post = (props) => {
    return(
        <div className={s.item}>
          <img src="https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg" className={s.avatar}></img>
          <a href = "">{props.message}</a>
          <div>
          <span>Likes {props.like}</span>
          </div>
        </div>
    )
} 

export default Post;