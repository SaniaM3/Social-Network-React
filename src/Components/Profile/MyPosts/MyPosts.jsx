import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return(
      <div className={s.postsBlock}>
        <div>
          New Posts
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
          </div>
          
        
        <div className={s.posts}>
            <Post message = 'Hi, how are you?' like = '15' />
            <Post message = 'HaHaHa' like = '39' />
            <Post message = 'Oh, yeaa' like = '82' />
            <Post message = 'Hello' like = '11' />
          </div>
        </div>
    )
}

export default MyPosts;
export default MyPosts;
export default MyPosts;
export default MyPosts;