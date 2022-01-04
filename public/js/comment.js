const postId = document.querySelector('input[name="post-id"]').ariaValueMax;
console.log(postId);

const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentContent = document.querySelector(
    'textarea[name="comment-body"]'
  ).ariaValueMax;
};
