async function editPostHandler(event) {
  event.preventDefault();

  const title = document.getElementById("post-title");
  const content = document.getElementById("post-content");
  const postId = document.getElementById("post-id");

  const response = await fetch("/api/post/" + postId.value, {
    method: "PUT",
    body: JSON.stringify({
      title: title.value,
      body: content.value,
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
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
