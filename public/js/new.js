async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;
  // const user_id =
  const response = await fetch(`/api/post/new`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#submit-btn").addEventListener("click", newPostHandler);
