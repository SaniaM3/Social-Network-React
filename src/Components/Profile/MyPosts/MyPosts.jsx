import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return(
      <div>
        <div>
          New Posts
        </div>
        <div>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message = 'Hi, how are you?' />
            <Post message = 'HaHaHa' />
            <Post message = 'Oh, yeaa' />
            <Post message = 'Hello' />
          </div>
        </div>
    )
}

export default MyPosts;