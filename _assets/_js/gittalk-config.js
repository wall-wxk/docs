var specialPage = ['#/', '#/frontend-base/', '#/frontend-upper/', '#/magic-code/', '#/soft-power/', '#/architecture-design/', '#/project/'];

var loadGittalk = function () {
  if(specialPage.indexOf(location.hash) !== -1){
    return;
  }
  var gitalk = new Gitalk({
    clientID: "15fdb6465cf7c7fe6342",
    clientSecret: " db93e28da52497861e9bdfe4280cfda98c8840fa",
    repo: "interview",
    owner: "wall-wxk",
    admin: ["请登录GitHub后进行评论"],
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
