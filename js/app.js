function loadComponent(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html
    })
    .catch((error) => console.error("Error loading component: ", error))
}

const app = {
  "header": "./components/Header.html",
  "running-line-top": "./components/RunningLine.html",
  "event-info": "./components/EventInfo.html",
  "event-stages": "./components/EventStages.html",
  "event-members": "./components/EventMembers.html",
  "running-line-bottom": "./components/RunningLine.html",
  "footer": "./components/Footer.html",
}

Object.entries(app).forEach(([key, value]) => {
  loadComponent(key, value)
})
