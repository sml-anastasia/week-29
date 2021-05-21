import React from "react";

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            data: {
                name: "",
                comment: ""
            }
        }
    }

    componentDidMount() {
        if (localStorage.getItem('comments')) {
            this.setState({ ...JSON.parse(localStorage.getItem('comments')) })
        }
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            data: {
            ...this.state.data,
            [e.target.name]: e.target.value,
        }
        })
    }

    addComment = () => {
        this.setState({
            // клонируются объекты-комментарии в массив с помощью spread
            comments: [
                ...this.state.comments,
                {
                    name: this.state.data.name,
                    comment: this.state.data.comment,
                }
            ],
            // очищает поля ввода
            data: {
                name: '',
                comment: ''
            }
        }, () => localStorage.setItem('comments', JSON.stringify(this.state)) // запись в хранилище
        )
    }

    render () {
        return (
            <div className="comment-box">
                <p>your comment:</p>
                {this.state.comments.map(comment =>
                <div className="comments">
                    <span>{comment.name}</span> : <span>{comment.comment}</span>
                </div>
                )}
                <form>
                    <input value={this.state.data.name} type="text" name="name" className="data-name" onChange={this.handleChange}></input>
                    <textarea value={this.state.data.comment} type="text" name="comment" className="data-comment" onChange={this.handleChange}></textarea>
                    <button onClick={this.addComment}>send</button>
                </form>
            </div>
        )
    }
}