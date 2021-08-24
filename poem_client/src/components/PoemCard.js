import React from "react";
import LikeButton from './LikeButton'
import NewPoemForm from './NewPoemForm'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'

function PoemCard() {
    return (
        <div className="poem-card">
            <LikeButton/>
            <NewPoemForm/>
            <CommentForm/>
            <CommentSection/>
        </div>
    );
}

export default PoemCard;