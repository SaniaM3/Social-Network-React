import { useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postData.map( el => <Post message = {el.message} like = {el.likesCounte} />)

    const newPostElement = useRef(null);

    const addPost = () => {

      let text = newPostElement.current.value;
      alert('Test')   

    }
    return(
      <div className={s.postsBlock}>
        <div>
          New Posts
        </div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
          <button>Remove</button>
          </div>
          
        
        <div className={s.posts}>
            {postsElement}
          </div>
        </div>
    )
}

export default MyPosts;
