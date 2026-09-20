document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <link rel="stylesheet" href="/code/css/header_TopLeft.css">
    <header class="site-header">
      <div class="header-container">
        <!-- Blue Arrow Toggle Button -->
        <button id="headerToggleBtn" class="toggle-btn" aria-label="Toggle Home Button">
          &#10095;
        </button>

        <!-- Hidden Home Logo Container -->
        <div id="headerNavContent" class="nav-content">
          <a href="/index.html" class="logo" title="麥塊藍月光">
            <img src="/icon.png" alt="Logo">
          </a>
        </div>
      </div>
    </header>
  `;
  
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const toggleBtn = document.getElementById("headerToggleBtn");
  const navContent = document.getElementById("headerNavContent");

  if (toggleBtn && navContent) {
    toggleBtn.addEventListener("click", function () {
      toggleBtn.classList.toggle("open");
      navContent.classList.toggle("open");
    });
  }
});