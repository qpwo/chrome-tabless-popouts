function getFeatureString() {
    return `directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,width=${window.outerWidth},height=${window.outerHeight}`
}
document.addEventListener('click', e => {
    const href = e.target.closest('a')?.href
    if (href && e.altKey) {
        e.preventDefault()
        e.stopImmediatePropagation()
        window.open(href, href, getFeatureString())
    }
})

document.addEventListener('keydown', e => {
    if (e.altKey && e.keyCode === 80 && document.activeElement.nodeName !== 'INPUT') {
        window.open(window.location.href, document.title, getFeatureString())
    }
})
