import React from "react";

const styleSheet = {
    backgroundColor: 'bisque',
    border: '2px solid red',
    borderRadius: '20px',
    margin: '20px',
    padding: '20px'
}
class Post extends React.Component {
    render() {
        const { id, title, body } = this.props.post;
        return (
            <div style={styleSheet}>
                <h1>Id: {id}</h1>
                <h3>Title: {title}</h3>
                <h5>Body: {body}</h5>
            </div>
        )
    }
}

export default Post;