const log = (...args) => { console.log.apply(console, [ Date.now(), ...args] )}

log(document.getElementsByClassName('user_info')[0])
log(document.cookie)


const xhr = new XMLHttpRequest()

xhr.onreadystatechange   = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    log('wakaka ok')
  }
}

xhr.open('get', '/check_login?r=0.7448267473768513&_=1490191688410')
xhr.send()
