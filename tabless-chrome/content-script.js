setTimeout(main, 1000)
function main() {
    console.log('main started')
    const links = document.querySelectorAll('a')
    for (const link of links) {
        // window.open(window.location.href,document.title,"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,width=800,height=500");})();
        link.target = 'popup'
        link.addEventListener('click', e => {
            if (e.altKey) {
                alert('you clicked')
                window.open(
                    a.href,
                    'popup',
                    'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,width=800,height=500'
                )

                e.preventDefault()
            }
        })
        // link.href = ''
        // link.onclick = () => {
        //     return false
        // }
        //         <a href="http://kanishkkunal.com"
        //   target="popup"
        //   onclick="window.open('http://kanishkkunal.com','popup','width=600,height=600'); return false;">
        //     Open Link in Popup
        // </a>
    }
    console.log('main done')
}
