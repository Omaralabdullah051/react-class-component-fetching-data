import React from "react";
import Post from "../Posts/Post";


class LoadPosts extends React.Component {
    state = { posts: [] };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
    }
    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>Posts: {posts.length}</h1>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        )
    }
}

export default LoadPosts;