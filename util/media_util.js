export default {
  /**
   * 获取摄像设备唯一标识
   */
  getVideoDeviceId() {
    return new Promise((resolve, reject) => {
      if (navigator.mediaDevices) {
        navigator.mediaDevices.enumerateDevices().then(devices => {
          var ret = devices.filter(function (item) {
            return (
              item.kind == "videoinput" &&
              item.label.indexOf("喇叭") == -1 &&
              item.label.indexOf("耳机") == -1 &&
              item.deviceId.indexOf("default") == -1
            );
          });
          resolve(ret);
        });
      } else {
        reject("mediaDevices is not implemented in this browser");
      }
    });
  },
  /**
   * 根据deviceId获取流
   * 
   * 播流例子
   * let target = document.getElementById("#videoId");
   * if ("srcObject" in target) {
   *     target.srcObject = stream;
   * else {
   *     target.src = window.URL.createObjectURL(stream);
   * }
   * 
   * @param {*} deviceId
   * @returns
   */
  getUserMedia: function (deviceId) {
    return new Promise((resolve, reject) => {
      var commomUserMedia = function (constraints) {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
        }
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = commomUserMedia;
      }
      var constraints = {};
      constraints.video = deviceId ? { optional: [{ sourceId: deviceId }] } : true;
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          resolve(stream);
        })
        .catch(function (err) {
          reject(err.name + ": " + err.message);
        });
    });
  }
};
