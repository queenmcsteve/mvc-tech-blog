async function editPostHandler(postId) {
  const title = document.querySelector("#post-title");
  const content = document.querySelector("#post-content");
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
