import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, updatePost } from '../redux/actions/postActions'


function PostItem({ post }) {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const [editPost, setEditPost ] = useState(false)
    const [contentEdit, setContentEdit] =useState(post.content)
    const [confirmDelete, setConfirmDelete ] = useState(false)
    let date = new Date(post.createdAt)

    const handleEditSubmit = (e) => {
        e.preventDefault()
        dispatch(updatePost({id: post._id, content: contentEdit, user}))
        setEditPost(false)
    }

    const handleDelete = () => {
        dispatch(deletePost({id: post._id}))
        setConfirmDelete(false)
    }

    return (
        <div className="post-item">
            <p className="post-item">
                {post.content}
            </p>
            <div className="post-footer">
                <div className="post-infors">
                    <span>{`By ${post.author.name}`}</span>
                    <span>Date: {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                </div>
                <div className="post-edit-delete">
                    {
                        post.author.name === user  && (<>
                            {
                                !confirmDelete && (
                                    <>
                                        <span onClick={()=>setEditPost(true)}>Edit</span>
                                        <span onClick={()=>setConfirmDelete(true)}>Delete</span>
                                    </>
                                )
                            }
                            
                        </>)
                    }
                    {
                        confirmDelete && (
                            <>
                                <span className='delete-question'>Are you sure?</span>
                                <span onClick={handleDelete}>Yes</span>
                                <span onClick={()=>setConfirmDelete(false)}>No</span>
                            </>
                        )
                    }
                </div>
                
            </div>
            {
                editPost && (
                    <div className="post-edit-form">
                        <form onSubmit={handleEditSubmit} className="edit-form">
                            <textarea type='text' name='content' id='content' className='content' onChange={(e) => setContentEdit(e.target.value)}  placeholder={`What's happening`}>{post.content}</textarea>
                            <div className="btn-container">
                                <button className="btn" type='submit'>Update</button>
                                <button className="btn" onClick={()=> setEditPost(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
  )
}

export default PostItem