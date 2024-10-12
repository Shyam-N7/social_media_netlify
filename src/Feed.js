import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
        {/* map posts and iterate through the posts */}
        {posts.map(post => (
            <Post key={post.id} post={post}/>
        ))}
    </>
  )
}

export default Feed