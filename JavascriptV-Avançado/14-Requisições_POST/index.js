function renderArticle(articleData) {
  //Criando a div dos artigos
  const article = document.createElement("article");
  article.classList.add("article");
  article.id = `article-${articleData.id}`;
  //Criando o titulo
  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleData.title;
  //Criando o conteudo
  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleData.content;
  //Criando o autor
  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = `Autor:${articleData.author}`;
  //Colocando tudo no artigo
  article.append(title, author, content);
  //Colocando na div do html
  document.querySelector("#articles").appendChild(article);
}

async function fetchArticles() {
  const articles = await fetch("http://localhost:3000/articles").then((res) =>
    res.json()
  );

  articles.forEach(renderArticle);
}

document.addEventListener("DOMContentLoaded", () => fetchArticles());

const form = document.querySelector("form");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };
  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  const savedArticle = await response.json();
  form.reset();
  renderArticle(savedArticle);
});
