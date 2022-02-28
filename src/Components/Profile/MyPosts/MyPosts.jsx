import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Hi', likesCounte: 15},
    {id: 2, message: 'Hi, how are you?', likesCounte: 39},
    {id: 3, message: 'Oh, yeaa', likesCounte: 82},
    {id: 4, message: 'Hello', likesCounte: 11},
];

    let postsElement = postData.map( el => <Post message = {el.message} like = {el.likesCounte} />)
    
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
            {postsElement}
          </div>
        </div>
    )
}

export default MyPosts;
