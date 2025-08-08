const scenarios = [
  { title: "狂気山脈", author: "まだら牛様", genre: "ホラー", link: "https://booth.pm/ja/items/1071516" },
  { title: "異能警察は、英雄じゃない", author: "弱小亭ろっしー様", genre: "ファンタジー", link: "https://booth.pm/ja/items/3003649" },
  { title: "アンドロイドはシンギュラリティの到達を夢見る", author: "川犬様", genre: "SF", link: "https://booth.pm/ja/items/2273308" },
  { title: "ループ橋で何かが自分を待っているんです。", author: "スクラップ様", genre: "ホラー", link: "https://booth.pm/ja/items/3472076" }
];

const container = document.getElementById("scenarioList");
const genreFilter = document.getElementById("genreFilter");

function displayScenarios(filter = "all") {
  container.innerHTML = "";
  const filtered = filter === "all" ? scenarios : scenarios.filter(s => s.genre === filter);

  filtered.forEach(s => {
    const div = document.createElement("div");
    div.className = "scenarioCard";
    div.innerHTML = `
      <h3>${s.title}</h3>
      <p>作：${s.author}</p>
      <p>ジャンル：${s.genre}</p>
      <a href="${s.link}">詳細を見る</a>
    `;
    container.appendChild(div);
  });

  console.log("現在のジャンル:", filter);
}

genreFilter.addEventListener("change", () => {
  const selected = genreFilter.value;
  displayScenarios(selected);
});

displayScenarios();

let lastScrollY = window.pageYOffset;
const header = document.querySelector('.siteHeader');

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // 下にスクロール → ヘッダーを隠す
    header.classList.add('hide');
  } else {
    // 上にスクロール → ヘッダーを表示
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});