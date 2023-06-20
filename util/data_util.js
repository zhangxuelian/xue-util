export default {
    /**
     * 判断是否为函数
     *
     * @param {any} fn
     * @returns {boolean}
     */
    isFunction(fn) {
        return Object.prototype.toString.call(fn) === "[object Function]";
    },
    /**
     * 从数组中查找对象值，返回下标（同用于判断数组中是否存在某对象）
     * ps：数组对象为json
     * @param {any} arr
     * @param {any} key
     * @param {any} value
     * @returns
     */
    eleInArr: function (arr, key, value) {
        try {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][key] == value) {
                    return i;
                }
            }
            return -1;
        } catch (e) {
            return -1;
        }
    },
    /**
     * 从数组中查找对象值，返回数组
     * ps：数组对象为数组
     * @param {any} arr
     * @param {any} key
     * @param {any} valueArr
     * @returns
     */
    eleInArrByKeys: function (arr, key, valueArr) {
        var ret = [];
        try {
            for (var i = 0; i < arr.length; i++) {
                for (var j in valueArr) {
                    if (arr[i][key] == valueArr[j]) {
                        ret.push(arr[i]);
                        valueArr.splice(j, 1);
                    }
                }
                if (valueArr.length == 0) {
                    return ret;
                }
            }
            return ret;
        } catch (e) {
            return ret;
        }
    },
    /**
     * 从数组中查找对象值，返回下标（同用于判断数组中是否存在某对象）
     * ps:数组对象为string
     * @param {any} arr
     * @param {any} value
     * @returns
     */
    valInArr: function (arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;
    },
    /**
     * 数组去重,数组元素为string
     *
     * @param {any} arr
     * @returns
     */
    uniqueArr: function (arr) {
        var res = [];
        var json = {};
        for (var i = 0; i < arr.length; i++) {
            if (!json[arr[i]]) {
                res.push(arr[i]);
                json[arr[i]] = 1;
            }
        }
        return res;
    },
    /**
     * 数组去重,数组元素为json
     *
     * @param {any} arr
     * @param {any} key
     * @returns
     */
    uniqueArrJson: function (arr, key) {
        var res = [];
        var json = {};
        arr.forEach(function (item, i) {
            if (!json[item[key]]) {
                res.push(item);
                json[item[key]] = 1;
            }
        });
        return res;
    },
    /**
     * 比对版本号
     * @param {String} lastVersion 上一个版本号
     * @param {String} crrentVersion 当前版本号
     * @returns {Boolean} 0: 当前=上个版本 1: 当前>上个版本 -1: 当前<上个版本
     */
    compareVersion(lastVersion, crrentVersion) {
        if (lastVersion && crrentVersion) {
            var lastArr = lastVersion.split(".");
            var currentArr = crrentVersion.split(".");
            for (let i = 0; i < currentArr.length; i++) {
                if (currentArr[i] > lastArr[i]) {
                    return 1;
                }
                if (currentArr[i] < lastArr[i]) {
                    return -1;
                }
            }
            return 0;
        } else {
            return 0;
        }
    }
}