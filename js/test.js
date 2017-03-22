const log = (...args) => { console.log.apply(console, [ Date.now(), ...args] )}

log(document.getElementsByClassName('user_info')[0])
log(document.cookie)
