async function editPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title");
  const content = document.querySelector("#post-content");
  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log("/api/post/edit/" + postId);
  const response = await fetch("/api/post/edit/" + postId, {
    method: "PUT",
    body: JSON.stringify({
      title: title.value,
      body: content.value,
    }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#edit-post-btn")
  .addEventListener("click", editPostHandler);
