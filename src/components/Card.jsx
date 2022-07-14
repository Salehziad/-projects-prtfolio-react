import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({post}) {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="card-title">{post.title}</span>
        <img src={post.img} alt="" className="img"/>
        <p className="desc">{post.desc}</p>
        <button className='cardButton'>Read more</button>
      </Link>
    </div>
  )
}
