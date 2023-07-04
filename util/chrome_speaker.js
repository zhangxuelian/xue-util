/**
 * 谷歌语音模块
 */
export default {
  /**
   * 谷歌 speechSynthesis
   * SpeechSynthesisUtterance 文字转语音对象
   */
  init: function () {
    var ret = {
      player: null,
      textObj: null
    };
    try {
      // 在google chrome 89版本之后 默认使用的线上服务来合成语音 所以在国内可能会没有声音
      // 通过getVoices 获取 localService为true 的字段 （localService = true 表示 使用本地合成服务）
      ret.player = window.speechSynthesis;
      ret.textObj = new window.SpeechSynthesisUtterance();
      ret.textObj.text = ""; // 文字内容
      ret.textObj.lang = "zh-CN"; // 使用的语言:中文
      ret.textObj.volume = 2; // 声音音量：range:0-2, default:1, float
      ret.textObj.rate = 1; // 语速：range:0.1-10, default:1, float
      ret.textObj.pitch = 1; // 音高：range: 0-1, default:1, float
      ret.textObj.voice = window.speechSynthesis.getVoices().find(item => item.localService && item.lang === "zh-CN");
    } catch (error) {}
    return ret;
  },
  /**
   * 朗读文字
   */
  speak: function (player, textObj) {
    try {
      player.speak(textObj);
    } catch (error) {}
  },
  /**
   * 取消朗读(在播放语音之前先调用一下cancel方法)
   */
  cancel: function (player) {
    try {
      player.cancel();
    } catch (error) {}
  },
  /**
   * 暂停朗读
   */
  pause: function (player) {
    try {
      player.pause();
    } catch (error) {}
  },
  /**
   * 继续朗读
   */
  resume: function (player) {
    try {
      player.resume();
    } catch (error) {}
  }
};
