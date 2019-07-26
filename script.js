function createUserCard(userInfo) {
  const card = `<div class="mainPage__card">
        <img
          class="card__userImage"
          src=${userInfo.avatar_url}
        />

        <div class="card__userDetails">
          <h1 class="userDetails__username--centered">${userInfo.login}</h1>
          <button onclick="loadRepoPage()">Repositories</button>
          <button onclick=" window.open('${
            userInfo.html_url
          }', '_blank')"  >Full Profile</button>
        </div>
      </div>`;
  return card;
}

function loadRepoPage(e) {
  //   const url = `https://api.github.com/search/users/${usermame}/repos`;
  //   let repos = await fetch(url);
  //   repos = repos.json();
  //   toggle(".mainPage");
  //   console.log(repos);
  console.log("dfdf");
}

window.onload = () => {
  const search_btn = document.querySelector(".searchPanel__btnSearch");
  const main_page = document.querySelector(".mainPage");
  const input_search = document.querySelector(".searchPanel__inputSearch");

  search_btn.addEventListener("click", async () => {
    let users;
    users = await fetch(
      `https://api.github.com/search/users?q=${input_search.value}`
    );

    users = await users.json();
    const usersInfo = users.items;
    for (let i = 0; i < usersInfo.length; i++) {
      const user = usersInfo[i];
      const user_card = createUserCard(user);
      main_page.innerHTML += user_card;
    }
  });
};

function toggle(elclass) {
  var x = document.querySelector(elname);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
