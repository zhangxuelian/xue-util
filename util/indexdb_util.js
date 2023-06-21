export default {
    /**
     * 打开数据库
     * @param {String} dbName 数据库名
     * @param {Number} dbVersion 版本
     */
    openIndexedDB(dbName, dbVersion) {
        var p = new Promise((resolve, reject) => {
            var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
            if (!indexedDB) {
                reject("当前浏览器不支持indexedDB数据存储！");
            }
            var request = indexedDB.open(dbName, dbVersion);
            request.onerror = function (e) {
                reject(e.currentTarget.error.message);
            };
            request.onsuccess = function (e) {
                var db = e.target.result;
                resolve({ db: db, type: "onsuccess" });
            };
            request.onupgradeneeded = function (e) {
                var db = e.target.result;
                resolve({ db: db, type: "onupgradeneeded" });
            };
            request.blocked = function (e) {
                reject("数据库连接未关闭！")
            }
        });
        return p;
    },
    /**
     * 创建ObjectStore（表）
     * @param {Object} db 数据库实例
     * @param {String} storeName 对象仓库（表）名
     * @param {String} keyPath 主键字段名
     * @param {Bool} autoIncrement 是否自增
     */
    createObjectStore(db, storeName, keyPath, autoIncrement) {
        if (!db.objectStoreNames.contains(storeName)) {
            var objectStore = db.createObjectStore(storeName, {
                keyPath: keyPath,
                autoIncrement: autoIncrement || false
            });
            return objectStore;
        } else {

        }
    },
    /**
     * 建立索引
     * @param {Object} objectStore 必需，表对象
     * @param {String} indexName 必需，索引的名称
     * @param {String} keyPath 必需，索引所对应的存储数据的属性名称
     * @param {Object} objectParameters 可选，一个对象，用于对索引进行相关配置
     */
    createIndex(objectStore, indexName, keyPath, objectParameters) {
        objectStore.createIndex(indexName, keyPath, objectParameters || {});
    },
    /**
     * 插入数据
     * @param {Object} db 数据库
     * @param {Object} storeName 表名
     * @param {Object} data 插入的数据
     * @param {Object} objectStore 可选，表对象[首次创建表，需要在oncomplete中插入对象]
     */
    insert(db, storeName, data, objectStore) {
        var p = new Promise((resolve, reject) => {
            if (objectStore) {
                objectStore.transaction.oncomplete = function () {
                    var transaction = db.transaction(storeName, 'readwrite');
                    var request = transaction.objectStore(storeName).add(data);
                    request.onsuccess = function (e) {
                        resolve(e.target.result);
                    };
                    request.onerror = function (e) {
                        reject(e.target.error);
                    };
                }
            } else {
                var transaction = db.transaction(storeName, 'readwrite');
                var request = transaction.objectStore(storeName).add(data);
                request.onsuccess = function (e) {
                    resolve(e.target.result);
                };
                request.onerror = function (e) {
                    reject(e.target.error);
                };
            }
        });
        return p;
    },
    /**
     * 根据索引查询数据
     * @param {Object} db 数据库
     * @param {String} storeName 表名
     * @param {String} indexName 索引名
     * @param {String} indexValue 检索的值
     */
    searchByIndex(db, storeName, indexName, indexValue) {
        var p = new Promise((resolve, reject) => {
            var transaction = db.transaction(storeName);
            var objectStore = transaction.objectStore(storeName);
            var index = objectStore.index(indexName);
            var request = index.get(indexValue);
            request.onsuccess = function (e) {
                if (e.target.result) {
                    resolve(e.target.result);
                } else {
                    reject('未获得数据记录！');
                }
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    },
    /**
     * 根据主键查询数据
     * @param {Object} db 数据库
     * @param {String} storeName 表名
     * @param {String} id 主键值
     */
    searchById(db, storeName, id) {
        var p = new Promise((resolve, reject) => {
            var transaction = db.transaction(storeName);
            var objectStore = transaction.objectStore(storeName);
            var request = objectStore.get(id);
            request.onsuccess = function (e) {
                if (e.target.result) {
                    resolve(e.target.result);
                } else {
                    reject('未获得数据记录！');
                }
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    },
    /**
     * 游标查询所有数据
     * @param {Object} db 数据库
     * @param {String} storeName 表名
     */
    searchAll(db, storeName) {
        var p = new Promise((resolve, reject) => {
            var transaction = db.transaction(storeName);
            var objectStore = transaction.objectStore(storeName);
            var request = objectStore.openCursor();
            var ret = [];
            request.onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    ret.push(cursor.value || {});
                    cursor.continue();
                } else {
                    // console.log(ret);
                    resolve(ret);
                }
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    },
    /**
     * 更新或添加数据（取决于主键的值是否已存在）
     * @param {Object} db 数据库
     * @param {String} storeName 表名
     * @param {Object} data 更新的数据
     */
    update(db, storeName, data) {
        var p = new Promise((resolve, reject) => {
            var request = db.transaction(storeName, 'readwrite')
                .objectStore(storeName)
                .put(data);

            request.onsuccess = function (e) {
                resolve('数据更新成功!');
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    },
    /**
     * 根据主键值删除记录
     * @param {Object} db 
     * @param {String} storeName 
     * @param {String} id 
     */
    deleteById(db, storeName, id) {
        var p = new Promise((resolve, reject) => {
            var request = db.transaction(storeName, 'readwrite')
                .objectStore(storeName)
                .delete(id);

            request.onsuccess = function (e) {
                resolve('数据删除成功！');
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    },
    /**
     * 游标和索引同时使用查询所有数据
     * @param {Object} db 数据库
     * @param {String} storeName 表名
     * @param {String} storeName 表名
     * @param {String} indexName 索引名
     * @param {String} indexValue 检索的值
     */
    searchAllByIndex(db, storeName, indexName, indexValue) {
        var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange;
        var p = new Promise((resolve, reject) => {
            var transaction = db.transaction(storeName, 'readwrite');
            var objectStore = transaction.objectStore(storeName);
            var index = objectStore.index(indexName);
            var request = index.openCursor(IDBKeyRange.only(indexValue));
            var ret = [];
            request.onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    ret.push(cursor.value || {});
                    cursor.continue();
                } else {
                    resolve(ret);
                }
            };
            request.onerror = function (e) {
                reject(e.target.error);
            };
        });
        return p;
    }
}