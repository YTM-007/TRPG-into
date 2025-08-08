document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 簡単なバリデーション
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    if (!name || !email || !msg) {
      message.style.color = "red";
      message.textContent = "必須項目をすべて入力してください。";
      return;
    }

    // メール形式チェック（簡易）
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.style.color = "red";
      message.textContent = "正しいメールアドレスを入力してください。";
      return;
    }

    // フォーム送信処理（ここは実際はサーバー処理などが必要）
    // 今回はダミーで成功メッセージを表示
    message.style.color = "green";
    message.textContent = "リクエストありがとうございました！";

    form.reset();
  });
});

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