export default {
  timer: null,
  intervalTime: 3000,
  checkOnLineUrl: "",
  isOnline() {
    return window.navigator.onLine;
  },
  start({ callback, intervalTime, checkOnLineUrl }) {
    this.stop();
    this.intervalTime = intervalTime || 3000;
    this.checkOnLineUrl = checkOnLineUrl || window.localStorage.getItem("CHECK_ONLINE_URL");
    if (!this.checkOnLineUrl) {
      return;
    }
    this.timer = setInterval(() => {
      this.check().then(ret => {
        callback(ret);
      });
    }, this.intervalTime);
  },
  check() {
    let self = this;
    return new Promise((resolve, reject) => {
      if (this.isOnline()) {
        let startTime = Date.now();
        let img = new Image();
        img.onload = () => {
          let endTime = Date.now();
          let theTime = endTime - startTime;
          if (theTime > 200) {
            resolve({
              isOnline: true,
              speed: "bad",
              speedTxt: "网速过慢",
              useTime: theTime
            });
          } else if (theTime > 100) {
            resolve({
              isOnline: true,
              speed: "medium",
              speedTxt: "网速中等",
              useTime: theTime
            });
          } else {
            resolve({
              isOnline: true,
              speed: "great",
              speedTxt: "网速极佳",
              useTime: theTime
            });
          }
        };
        img.onerror = () => {
          resolve({
            isOnline: false,
            speed: "",
            speedTxt: "",
            useTime: 0
          });
        };
        img.src = self.checkOnLineUrl + "?t=" + Date.now();
      } else {
        resolve({
          isOnline: false,
          speed: "",
          speedTxt: "",
          useTime: 0
        });
      }
    });
  },
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
