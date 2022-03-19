import React from "react";
import Comments from "../Comments/Comments";


class LoadComments extends React.Component {
    state = { comments: [] };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => this.setState({ comments: data }))
    }
    render() {
        const { comments } = this.state;
        return (
            <div>
                <h1>Comments: {comments.length}</h1>
                {
                    comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                }
            </div>
        )
    }
}

export default LoadComments;