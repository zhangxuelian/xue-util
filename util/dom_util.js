export default {
    parents(el, parentSelector) {
        if (parentSelector === undefined) {
            parentSelector = document;
        }
        var parents = [];
        var p = el.parentNode;
        while (p && p !== parentSelector) {
            var o = p;
            parents.push(o);
            p = o.parentNode;
        }
        parents.push(parentSelector);
        return parents;
    },
    querySelector(domArr, domFlag) {
        var ret = [];
        if (!domArr || !domArr.length) {
            return ret;
        }
        if (!domFlag || !domFlag.length) {
            return ret;
        }
        var flag = domFlag.substr(0, 1)
        for (let i = 0; i < domArr.length; i++) {
            if (flag == "." && domArr[i].className == domFlag.substr(1, domFlag.length - 1)) {
                ret.push(domArr[i]);
            }
            if (flag == "#" && domArr[i].id == domFlag.substr(1, domFlag.length - 1)) {
                ret.push(domArr[i]);
            }
        }
        return ret;
    },
    isExistImage(url) {
        return new Promise((resolve) => {
            var img = new Image();
            img.onload = function () {
                if (this.complete == true) {
                    resolve(true);
                    img = null;
                }
            }
            img.onerror = function () {
                resolve(false);
                img = null;
            }
            img.src = url;
        });
    }
}