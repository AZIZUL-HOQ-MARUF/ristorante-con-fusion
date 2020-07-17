import React from 'react'

function DishComments(props) {
    if ((props.comments === null) || (props.comments === undefined)) {
        return <div></div>
    }
    const liList = props.comments.map((comment, i) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(comment.date)
        return <li key={i}>{comment.comment} <br />{'-- ' + comment.author + ', ' + date.toLocaleDateString(undefined, options)}</li>
    });
    return (
        <div>
            <ul className="list-unstyled">
                {liList}
            </ul>
        </div>
    );
}
export default DishComments;