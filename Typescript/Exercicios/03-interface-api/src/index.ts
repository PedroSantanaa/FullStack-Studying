interface GithubUserResponse {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  respos_url: string;
  message?: "Not Found";
}

interface GithubRepoResponse {
  name: string;
  description: string;
  fork: boolean;
  stars_count: number;
}

const users: GithubUserResponse[] = [];

async function fetchUser(userName: string) {
  const response = await fetch("https://api.github.com/users/" + userName);
  const user: GithubUserResponse = await response.json();

  if (user.message) {
    console.log("Usuario não encontrado");
  } else {
    users.push(user);
    console.log(
      `O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
    );
  }
}

async function showUserRepo(userLogin: string) {
  const user = users.find((user) => user.login === userLogin);

  if (typeof user) {
    console.log("Usuario não encontrado");
  } else {
    const response = await fetch(user.respos_url);
    const repos: GithubRepoResponse[] = await response.json();
    let message =
      `id: ${user.id}\n` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}`;

    repos.forEach((repo) => {
      message +=
        `\nNome: ${repo.name}` +
        `\nDescrição: ${repo.description}` +
        `\nEstrelas: ${repo.stars_count}` +
        `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
    });

    console.log(message);
  }
}

function showAllUsers() {
  let message = "Usuários:\n";

  users.forEach((user) => {
    message += `\n- ${user.login}`;
  });

  console.log(message);
}

function reposTotal() {
  const resposTotal = users.reduce(
    (total, user) => (total += user.public_repos),
    0
  );
  console.log(
    `O grupo possui um total de ${reposTotal} repositórios públicos!`
  );
}

function showTop5() {
  const top5 = users
    .slice()
    .sort((a, b) => b.public_repos - a.public_repos)
    .slice(0, 5);

  let message = "Top 5 usuários com mais repositórios públicos:\n";

  top5.forEach((user, index) => {
    message += `\n${index + 1} - ${user.login}: ${
      user.public_repos
    } repositórios`;
  });

  console.log(message);
}
