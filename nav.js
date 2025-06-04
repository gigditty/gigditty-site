document.addEventListener('DOMContentLoaded', function () {
  var header = document.createElement('header');
  header.innerHTML = '<nav>' +
    '<a href="index.html">Home</a>' +
    '<a href="sales.html">Discover</a>' +
    '<a href="privacy.html">Privacy</a>' +
    '<a href="terms.html">Terms</a>' +
    '<a href="user_data.html">User Data</a>' +
    '</nav>';
  document.body.insertAdjacentElement('afterbegin', header);

  var style = document.createElement('style');
  style.textContent = '\n    header {\n      padding: 1rem 2rem;\n      display: flex;\n      align-items: center;\n      background: var(--light, #fff);\n      border-bottom: 1px solid var(--muted, #f5f5f5);\n      position: sticky;\n      top: 0;\n      z-index: 10;\n    }\n    header nav a {\n      margin-right: 1.5rem;\n      text-decoration: none;\n      color: var(--dark, #1F1F1F);\n      font-weight: 500;\n      transition: color 0.2s ease;\n    }\n    header nav a:hover {\n      color: var(--primary, #E07E3F);\n    }';
  document.head.appendChild(style);
});
