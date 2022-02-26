import s from './MyPosts.module.css';

const MyPosts = () => {
    return(
      <div>
        <div>
          New Posts
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            <a href = "#">Post 1</a>
          </div>
          <div className={s.item}>
            <a href = "#">Post 2</a>
          </div>
          <div className={s.item}>
            <a href = "#">Post 3</a>
          </div>
        </div>
      </div>
    )
}

export default MyPosts;