import React, { FC } from 'react';
import './Comments.css';
import ParentComment from '../../api/Comment';
import TextareaAutosize from 'react-autosize-textarea/lib';
import TopComment from './TopComment';

interface CommentsProps {
    doorNumber: number
}

const CommentsSection: FC<CommentsProps> = ({doorNumber}) => {
    const comments: ParentComment[] = [{ content: "Foo bar baz", likes: 3, uuid: "loldas", user_id: 1231341, created_at: new Date(), edited_at: null, liked_by_me: false, children: [{ content: "Godt poeng!", likes: 4, uuid: "sadasds", user_id: 1241, created_at: new Date(), edited_at: null, liked_by_me: false }, { content: "Godt poeng!", likes: 4, uuid: "sadasds", user_id: 1241, created_at: new Date(), edited_at: null, liked_by_me: false }]   }]
    return (
        <section className="CommentSection">
            <CommentForm />
            {comments.map(comment => <TopComment comment={comment} />)}
        </section>
    )
}

const CommentForm = () => {
    return (
        <form className="CommentForm">
            <TextareaAutosize name="comment" id="comment" placeholder="Legg igjen en kommentar, gjerne i Markdown :)" />
            <div>
                <button className="SubmitButton" onClick={(e) => { e.preventDefault(); alert("click") }} value="Lagre">KOMMENTER</button>
            </div>
        </form>
    )
}


export default CommentsSection;