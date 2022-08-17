import React from 'react'
import {useLocation} from 'react-router-dom'
import posts from '../data'
export default function Post() {
    const location = useLocation();
    const path = location
        .pathname
        .split("/")[2];
    const post = posts.find(post => post.id.toString() === path)
    return (
        <div className="post">
            <img src={post.img} alt={post.title} className="post-image"/>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-description">{post.desc}</p>
            <p className="post-description-long">{post.longDesc}</p>
        </div>
    )
}
