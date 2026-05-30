document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <link rel="stylesheet" href="/code/css/header.css">
    <header class="site-header" style="padding-top: 8px; padding-bottom: 10px; padding-left: 10px; height: 70px; box-sizing: border-box; display: block; width: 100%;">
      <div class="header-container">
        <a href="/index.html" class="logo" title="麥塊藍月光">
          <img src="/icon.png" alt="Logo" style="width: auto; height: 55px; display: block;">
        </a>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});