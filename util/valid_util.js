const areaID = {
    11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海",
    32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
    46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆",
    71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
}
export default {
    /**
     * 性别ID
     */
    sexMap: { 0: "女", 1: "男" },
    /**
     * 校验身份证
     */
    checkIdCard: function (IDCard) {
        var iSum = 0;
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!reg.test(IDCard))
            return {
                status: false,
                message: '你输入的身份证长度或格式错误!'
            };
        IDCard = IDCard.replace(/x$/i, "a");
        if (areaID[parseInt(IDCard.substr(0, 2))] == null)
            return {
                status: false,
                message: '你的身份证地区非法!'
            };
        if (IDCard.length == 18) {
            var sBirthday = IDCard.substr(6, 4) + "-" + Number(IDCard.substr(10, 2)) + "-" + Number(IDCard.substr(12, 2));
            var d = new Date(sBirthday.replace(/-/g, "/"));
            if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))
                return {
                    status: false,
                    message: '身份证上的出生日期非法!'
                };
            for (var i = 17; i >= 0; i--)
                iSum += (Math.pow(2, i) % 11) * parseInt(IDCard.charAt(17 - i), 11);
            if (iSum % 11 != 1)
                return {
                    status: false,
                    message: '你输入的身份证号非法!'
                };
        }
        if (IDCard.length == 15) {
            var year = IDCard.substring(6, 8);
            var month = IDCard.substring(8, 10);
            var day = IDCard.substring(10, 12);
            var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
            // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法     
            if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
                return {
                    status: false,
                    message: '身份证上的出生日期非法!'
                };
            }
        }
        return {
            status: true,
            message: '校验成功！'
        };
    },
    /**
     * 根据身份证号获取身份证信息
     */
    getIDInfoByIdCard: function (idCard) {
        var self = this;
        return {
            sex: self.getSexByIdCard(idCard),
            birth: self.getBirthdayByIdCard(idCard),
            area: self.getAreaByIdCard(idCard),
            age: self.getAgeByIdCard(idCard)
        };
    },
    /**
     * 根据身份证号获取性别
     */
    getSexByIdCard: function (idCard) {
        var self = this;
        if (idCard.length == 15) {
            return self.sexMap[idCard.substring(14, 15) % 2];
        } else if (idCard.length == 18) {
            return self.sexMap[idCard.substring(14, 17) % 2];
        } else {
            //不是15或者18,null  
            return '';
        }
    },
    /**
     * 根据身份证号获取生日"yyyy-mm-dd"
     */
    getBirthdayByIdCard: function (idCard) {
        var birthdayStr;
        if (15 == idCard.length) {
            birthdayStr = idCard.charAt(6) + idCard.charAt(7);
            if (parseInt(birthdayStr) < 10) {
                birthdayStr = '20' + birthdayStr;
            } else {
                birthdayStr = '19' + birthdayStr;
            }
            birthdayStr = birthdayStr + '-' + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11);
        } else if (18 == idCard.length) {
            birthdayStr = idCard.charAt(6) + idCard.charAt(7) + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11) + '-' + idCard.charAt(12) + idCard.charAt(13);
        }
        return birthdayStr;
    },
    /**
     * 根据身份证号获取出生地
     */
    getAreaByIdCard: function (idCard) {
        return areaID[parseInt(idCard.substr(0, 2))];
    },
    /**
     * 根据身份证号获取年龄
     */
    getAgeByIdCard: function (idCard) {
        var birthdayStr = this.getBirthdayByIdCard(idCard);
        var r = birthdayStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null) return '';
        var d = new Date(r[1], r[3] - 1, r[4]);
        if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
            var Y = new Date().getFullYear();
            return (Y - r[1]);
        } else {
            return '';
        }
    },
    /**
     * 校验手机号码
     *
     * @param {Number} num
     * @returns
     */
    checkPhoneNum: function (num) {
        let pattern = /^1[0-9]\d{9}$/;
        if (pattern.test(num)) {
            return {
                status: true,
                message: '校验成功'
            }
        } else {
            return {
                status: false,
                message: '手机号码不合法'
            }
        }
    }
}