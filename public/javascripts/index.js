const container = document.getElementById("client-side-data");

function storePostsInLocalStorageWithTimestamp(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
  localStorage.setItem("ts", Date.now());
}

function renderPosts(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `<li>
        <p>User ID: ${post.userId}</p>
        <p>ID: ${post.id}</p>
        <p>Title: ${post.title}</p>
        <p>Body: ${post.body}</p>
      </li>`;
  });
  container.innerHTML = html;
}

function getPosts() {
  const latestSavedTimestamp = localStorage.getItem("ts") || "0";

  if (Date.now() < parseInt(latestSavedTimestamp, 10) + 30000) {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || {};
    return renderPosts(storedPosts);
  }

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      renderPosts(posts);

      storePostsInLocalStorageWithTimestamp(posts);
    })
    .catch((error) => console.error(error));
}

getPosts();

setInterval(getPosts, 60000);
