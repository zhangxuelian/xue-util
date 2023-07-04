export default {
  host: "",
  port: 80,
  clientId: "",
  cleansession: true,
  username: "root",
  password: "",
  useTLS: false,
  timeout: 30,
  mqttVersion: 4,
  keepAliveInterval: 30,
  /**
   * 初始化配置数据
   */
  init({ host, clientId, password, port, useTLS, cleansession, username, timeout, mqttVersion, keepAliveInterval }) {
    let self = this;
    self.host = host || 80;
    self.clientId = clientId;
    self.password = password;
    self.port = port;
    self.useTLS = useTLS;
    self.cleansession = cleansession;
    self.username = username || "root";
    self.timeout = timeout || 30;
    self.mqttVersion = mqttVersion || 4;
    self.keepAliveInterval = keepAliveInterval || 30;
  },
  /**
   * 连接mqtt
   *
   * @param {*} clientId
   * @param {*} onConnectionLost
   * @param {*} onMessageArrived
   * @param {*} onSuccess
   * @param {*} onFailure
   */
  connect({ clientId, onConnectionLost, onMessageArrived, onSuccess, onFailure }) {
    let self = this;
    let mqttInstance = new Paho.MQTT.Client(self.host, self.port, "/ws", clientId || self.clientId);
    mqttInstance.onConnectionLost = onConnectionLost || null;
    mqttInstance.onMessageArrived = onMessageArrived || null;
    mqttInstance.connect({
      timeout: slef.timeout,
      keepAliveInterval: self.keepAliveInterval,
      mqttVersion: self.mqttVersion,
      cleanSession: self.cleansession,
      onSuccess: onSuccess || null,
      onFailure: onFailure || null,
      useSSL: self.useTLS,
      userName: self.username,
      password: self.password
    });
    return mqttInstance;
  },
  /**
   * 订阅
   * @param {*} filter
   * @param {*} subscribeOptions
   */
  subscribe(mqttInstance, filter, subscribeOptions) {
    if (mqttInstance) {
      mqttInstance.subscribe(filter, subscribeOptions);
    }
  },
  /**
   * 格式化消息数据
   * @param {*} message
   * @returns
   */
  formatMessage(message) {
    return new Paho.MQTT.Message(message);
  },
  /**
   * 发送消息
   * @param {*} message
   */
  send(mqttInstance, message) {
    if (mqttInstance) {
      mqttInstance.send(message);
    }
  },
  /**
   * 断开连接
   */
  disconnect(mqttInstance) {
    if (mqttInstance) {
      mqttInstance.disconnect();
    }
  }
};
