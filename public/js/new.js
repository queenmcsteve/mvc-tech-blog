async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

  const response = await fetch(`/api/post/`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);
