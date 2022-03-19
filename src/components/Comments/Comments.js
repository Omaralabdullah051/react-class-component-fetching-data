import React from "react";

const styleSheet = {
    backgroundColor: 'gray',
    border: '2px solid red',
    borderRadius: '20px',
    margin: '20px',
    padding: '20px'
}
class Comments extends React.Component {
    render() {
        const { id, name, email, body } = this.props.comment;
        return (
            <div style={styleSheet}>
                <h1>Id: {id}</h1>
                <h3>Name: {name}</h3>
                <h5>Email: {email}</h5>
                <p>Body: {body}</p>
            </div>
        )
    }
}

export default Comments;