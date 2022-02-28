import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Hi', likesCounte: 15},
    {id: 2, message: 'Hi, how are you?', likesCounte: 39},
    {id: 3, message: 'Oh, yeaa', likesCounte: 82},
    {id: 4, message: 'Hello', likesCounte: 11},
];

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
            <Post message = {postData[0].message} like = {postData[0].likesCounte} />
            <Post message = {postData[1].message} like = {postData[1].likesCounte} />
            <Post message = {postData[2].message} like = {postData[2].likesCounte} />
            <Post message = {postData[3].message} like = {postData[3].likesCounte} />
          </div>
        </div>
    )
}

export default MyPosts;
