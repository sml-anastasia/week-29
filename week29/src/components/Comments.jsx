import React from "react";
import './Comments.css';
export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            username: "",
            comment: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('comments')) {
            this.setState({ ...JSON.parse(localStorage.getItem('comments')) })
        }
    }

    // связка name у инпута и value, универсальный способ вносить в инпут изменения
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // addComment = () => {
    //     this.setState({
    //         // пуш в массив
    //         comments: [
    //             ...this.state.comments,
    //             {
    //                 username: this.state.username,
    //                 comment: this.state.comment,
    //             }
    //         ],
    //         // очищает поля ввода
    //             username: '',
    //             comment: ''
    //         }, () => localStorage.setItem('comments', JSON.stringify(this.state)) // запись в хранилище
    //     )
    // }

    // без спреда
    addComment2 = () => {
        let comments = this.state.comments;
        comments.unshift({
            username: this.state.username,
            comment: this.state.comment,
        })
        this.setState({
            comments: comments,
                username: '',
                comment: ''
            }, () => localStorage.setItem('comments', JSON.stringify(this.state)) // запись в хранилище
        )
    }

    render () {
        return (
            <div className="comment-box">
                <p>Оставьте комментарий</p>
                <form className="comment-form">
                    <input value={this.state.username} type="text" name="username" className="data-name" placeholder="ваше имя" onChange={this.handleChange}></input>
                    <textarea value={this.state.comment} type="text" name="comment" className="data-comment" placeholder="что вы об этом думаете?" onChange={this.handleChange}></textarea>
                    <button onClick={this.addComment2} type="button">send</button>
                </form>
                <p>все комментарии:</p>
                {this.state.comments.map((comment, i) =>
                <div className="comments">
                    {i === 0 ?
                    <span className="new-comment">{comment.username} : {comment.comment}</span> :
                    <span className="plain-comment">{comment.username} : {comment.comment}</span>} 
                </div>
                )}
                
            </div>
        )
    }
}