const ogImageMeta = document.getElementsByClassName("og-image")

for (let i = 0; i < ogImageMeta.length; i++) {
    ogImageMeta[i].setAttribute("content", window.location + ogImageMeta[i].getAttribute("content"))
}