const ogImageMeta = document.getElementsByClassName("og-image")

for (let i = 0; i < ogImageMeta.length; i++) {
    ogImageMeta[i].setAttribute("content", window.location + ogImageMeta[i].getAttribute("content"))
}

const ogDescriptionMeta = document.getElementsByClassName("og-description")

for (let i = 0; i < ogDescriptionMeta.length; i++) {
    ogDescriptionMeta[i].setAttribute("content", "Rizwan Nasir — Full Stack Web Developer | Laravel | Symfony | Vue.js | React | Tailwind CSS")
}