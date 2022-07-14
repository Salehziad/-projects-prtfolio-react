import React from 'react';
import Card from '../components/Card';
import posts from '../data';
export default function Home({user}) {
  // console.log(user);
  return (
    <div className='home'>
        {posts.map(post =>(
            <Card key={post.id} post={post}/>
        ))}
    </div>
  )
}
