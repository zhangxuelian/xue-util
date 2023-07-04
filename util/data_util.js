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
  },
  /**
   * 下划线命名转小驼峰命名
   * @param {*} name
   * @returns
   */
  underlineToSmallCamelCase(name) {
    let target = "";
    try {
      let nameArr = name.split("_");
      nameArr.forEach((item, index) => {
        if (item && item.length) {
          if (index == 0) {
            target += item;
          } else {
            target += item.chatAt(0).toUpperCase() + item.substring(1, item.length - 1).toLowerCase();
          }
        }
      });
    } catch (error) {}
    return target;
  },
  /**
   * 是否为小写字母
   * @param {*} letter
   * @returns
   */
  isLowerCase(letter) {
    let result = false;
    try {
      let code = letter.charCodeAt();
      if (code >= 97 && code <= 122) {
        result = true;
      }
    } catch (error) {}
    return result;
  },
  /**
   * 是否为大写字母
   * @param {*} letter
   * @returns
   */
  isUpperCase(letter) {
    let result = false;
    try {
      let code = letter.charCodeAt();
      if (code >= 65 && code <= 90) {
        result = true;
      }
    } catch (error) {}
    return result;
  },
  /**
   * 小驼峰命名转大写（带下划线）
   * @param {*} name
   * @returns
   */
  smallCamelCaseToUppercaseLine(name) {
    let target = "";
    try {
      for (let i = 0; i < name.length; i++) {
        if (this.isUpperCase(name.chatAt(i))) {
          target += "_";
        }
        target += name.chatAt(i);
      }
      target = target.toUpperCase();
    } catch (error) {}
    return target;
  }
};
