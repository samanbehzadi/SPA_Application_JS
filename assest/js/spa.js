import router from "./router.js";

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.className.includes("nav-link")) {
    return false;
  }
  urlRoutes(event);
});

function urlRoutes(event) {
  window.history.pushState({}, "", event.target.href);
  // console.log(event.target.href)

  locationHandler();
}

async function locationHandler() {
  let loc = window.location.pathname; //   >>    /blog.html
  let route = router[loc] || router[404];
  let html = await fetch(route.template).then((resp) => resp.text());
  let pageTitle = router[loc].title
  document.querySelector("#content").innerHTML = html;
  
  // 2 lines below is used to change the title of each page
  document.querySelector('title').innerText = pageTitle
  // document.title = route.title
}


// document.querySelector('title').textContent = router[title]
window.onpopstate = locationHandler // to handle the browser navigation button