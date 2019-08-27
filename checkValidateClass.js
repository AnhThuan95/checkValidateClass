function checkValidateClass(str) {
    let patt = /^[ACP][0-9]{4}[G-M]$/;
    if (patt.test(str)){
        return true;
    } else {
        return false;
    }
}