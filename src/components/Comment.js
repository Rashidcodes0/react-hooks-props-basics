import React from "react";

function Comment(props) {
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;


function BlogPost() {
  return (
    <div>
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}


<div>
  <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>

  <div>I agree with this statement. - Angela Merkel</div>

  <div>A universal truth. - Noam Chomsky</div>

  <div>Truth is singular. Its ‘versions’ are mistruths - Sonmi-451</div>
</div>
