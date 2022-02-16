import React from 'react'
import './PostItem.css'
import PostItem from './PostItem'
import { useSelector } from 'react-redux'


function PostList() {
  const posts = useSelector(state => state.post.posts)


  return (
    <section className="post-section">
        <div className="post-list">
            {
              posts.map((post,index) => {
                return (
                  <div key={index}>
                    <PostItem post={post}/>
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default PostList