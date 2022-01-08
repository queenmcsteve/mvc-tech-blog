// const postId = document.querySelector('input[name="post-id"]').value;
// console.log(postId);

async function commentFormHandler(postId) {
  console.log(postId);
  // event.preventDefault();
  const commentContent = document.querySelector("#new-comment").value;
  console.log(commentContent);

  if (commentContent) {
    const response = await fetch("/api/comment/new", {
      method: "POST",
      body: JSON.stringify({
        post_id: postId,
        comment_text: commentContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// document
//   .querySelector("#submit-comment")
//   .addEventListener("click", commentFormHandler);
