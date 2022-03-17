import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let addPost = () => {
      props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.dispatch(action);
    }
    return(
      <MyPosts onPostChange = {onPostChange} addPost = {addPost} />
    )
}

export default MyPostsContainer;
......