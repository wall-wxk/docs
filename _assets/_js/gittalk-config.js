var specialPage = ['#/', '#/frontend-base/', '#/frontend-upper/', '#/magic-code/', '#/soft-power/', '#/architecture-design/', '#/project/'];

var loadGittalk = function () {
  if(specialPage.indexOf(location.hash) !== -1){
    return;
  }
  var gitalk = new Gitalk({
    clientID: "15fdb6465cf7c7fe6342",
    clientSecret: "15f4518ec1d1dc163f427f2d5d3ac4266a5ff452",
    repo: "interview",
    owner: "wall-wxk",
    admin: ["wall-wxk"],
    id: location.hash, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
  });

  var main = document.getElementById("main");
  if (main) {
    var div = document.createElement("div");
    div.id = "gitalk-container";
    main.appendChild(div);
    gitalk.render("gitalk-container");
  }
};

var oldOnload = window.onload;
var oldOnhashchange = window.onhashchange;

window.onload = function () {
  oldOnload && oldOnload();
  loadGittalk();
};
window.onhashchange = function () {
  oldOnhashchange && oldOnhashchange();
  setTimeout(function () {
    loadGittalk();
  }, 1000);
};
