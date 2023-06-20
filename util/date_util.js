let dateUtil = {};


/**
 * 返回距 1970 年 1 月 1 日之间的毫秒数(可用于比较时间先后)
 * @param {} Time 格式为：hh:mm:ss
 */
dateUtil.formatTimesFromTime = function (Time) {
    var arr = Time.split(":");
    var newTime = new Date('', '', '', arr[0], arr[1], arr[2]);
    var resultDate = newTime.getTime();
    return resultDate;
}
/**
 * 返回 date 间隔days天数的时间 1则为date的下一天 -1则为date的上一天
 * @param {} DateTime 格式为：yyyy-mm-dd hh:mm:ss
 */
dateUtil.addDate = function (paramDate, days) {
    var date = new Date(paramDate.replace(/\-/g, "\/"));
    date.setDate(date.getDate() + days);
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours = date.getHours();
    var strMins = date.getMinutes();
    var strSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMins >= 0 && strMins <= 9) {
        strMins = "0" + strMins;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + strHours + seperator2 + strMins +
        seperator2 + strSeconds;
    return currentdate;
}
/**
 * 返回 date 间隔hours小时的时间 1则为date的下一小时 -1则为date的上一小时
 * @param {} DateTime 格式为：yyyy-mm-dd hh:mm:ss
 */
dateUtil.addHours = function (paramDate, hours) {
    var date = new Date(paramDate.replace(/\-/g, "\/"));
    date.setHours(date.getHours() + hours);
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours = date.getHours();
    var strMins = date.getMinutes();
    var strSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMins >= 0 && strMins <= 9) {
        strMins = "0" + strMins;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + strHours + seperator2 + strMins +
        seperator2 + strSeconds;
    return currentdate;
}
dateUtil.minusDate = function (paramDate, days) {
    var date = new Date(paramDate.replace(/\-/g, "\/"));
    date.setDate(date.getDate() - days);
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours = date.getHours();
    var strMins = date.getMinutes();
    var strSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMins >= 0 && strMins <= 9) {
        strMins = "0" + strMins;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + strHours + seperator2 + strMins +
        seperator2 + strSeconds;
    return currentdate;
}
/**
 * 返回距 1970 年 1 月 1 日之间的毫秒数(可用于比较时间先后)
 * @param {} DateTime 格式为：yyyy-mm-dd hh:mm:ss
 */
dateUtil.formatTimesFromDateTime = function (DateTime) {
    var date = new Date(Date.parse(DateTime.replace(/-/g, "/")));
    var resultDate = date.getTime();
    return resultDate;
}
/**
 * 将时间戳转成普通时间格式(此处会返回一个当前日期的时间的bug)
 * @param ns 时间戳(距 1970 年 1 月 1 日之间的毫秒数)
 * @return {String} 格式为：yyyy-mm-dd hh:mm:ss
 */
dateUtil.getDateTimeFromStamp = function (ns) {
    var date = new Date(ns);
    return dateUtil.getFormatDate(date);
}
/**
 * 将时间戳转成普通时间格式(上面有误，这是正确的方法) 
 * @param ns 时间戳(距 1970 年 1 月 1 日之间的毫秒数)
 * @return {String} 格式为：yyyy-mm-dd hh:mm:ss
 */
dateUtil.getDateTimeFromStampCurrect = function (ns) {
    var date = new Date(ns);
    return dateUtil.formatDate(date);
}
/**
 * 格式化时间
 * @param {any} date /Mon Nov 20 2017 14:28:48 GMT+0800 (中国标准时间)/
 * @returns {String}/2016-01-01 23:59:59/
 */
dateUtil.formatDate = function (date) {
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHours = date.getHours();
    var strMins = date.getMinutes();
    var strSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMins >= 0 && strMins <= 9) {
        strMins = "0" + strMins;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var theDate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + strHours + seperator2 + strMins +
        seperator2 + strSeconds;
    return theDate;
}
/**
 * 获取当前时间 时分秒
 * @returns {String}/23:59:59/
 */
dateUtil.getFormatTime = function () {
    var date = new Date();
    var seperator2 = ":";
    var strHours = date.getHours();
    var strMins = date.getMinutes();
    var strSeconds = date.getSeconds();

    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    }
    if (strMins >= 0 && strMins <= 9) {
        strMins = "0" + strMins;
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }
    var currentdate = strHours + seperator2 + strMins +
        seperator2 + strSeconds;
    return currentdate;
}
/**
 * 获取当前日期
 * @returns {String}/2016-01-01/
 */
dateUtil.getTheDate = function () {
    try {
        var dateTime = dateUtil.getFormatDate();
        return dateTime.split(" ")[0];
    } catch (e) {
        return "";
    }

}
/**
 * 获取当前日期时间
 * @returns {String}/2016-01-01 23:59:59/
 */
dateUtil.getFormatDate = function () {
    var date = new Date();
    return dateUtil.formatDate(date);
}
/**
 * 校验日期格式
 * @param {String} date 2016-01-01
 */
dateUtil.checkDateFormat = function (date) {
    try {
        var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (result == null)
            return false;
        var d = new Date(result[1], result[3] - 1, result[4]);
        return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);
    } catch (e) {
        return false;
    }
}
/**
 * 校验时间格式
 * @param {String} Time 00:00:00
 */
dateUtil.checkTimeFormat = function (time) {
    try {
        var regex = /^(?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
        if (!regex.test(time)) {
            return false
        } else {
            return true;
        }
    } catch (e) {
        return false;
    }
}
/**
 * 校验日期时间格式
 * @param {String} dateTime  2016-01-01 00:00:00
 */
dateUtil.checkDateTimeFormat = function (dateTime) {
    try {
        var dateTimeArray = dateTime.split(" ");
        if (dateUtil.checkDateFormat(dateTimeArray[0]) && dateUtil.checkTimeFormat(dateTimeArray[1])) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
/**
 * 获取差距date有n秒钟的时间
 * 
 * @param date {any} /2016-01-01 23:59:59/
 * @param seconds {int} 0为date当时，1为date的下一秒钟，-1为date的上一秒钟，以此类推
 * @returns {String} /2016-01-01 23:59:59/
 */
dateUtil.getDatebySeconds = function (dateStr, seconds) {
    var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    date.setSeconds(date.getSeconds() + seconds);
    return dateUtil.formatDate(date);
}
/**
 * 获取差距date有n分钟的时间
 * 
 * @param date {any} /2016-01-01 23:59:59/
 * @param minutes {int} 0为date当时，1为date的下一分钟，-1为date的上一分钟，以此类推
 * @returns {String} /2016-01-01 23:59:59/
 */
dateUtil.getDatebyMinutes = function (dateStr, minutes) {
    var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    date.setMinutes(date.getMinutes() + minutes);
    return dateUtil.formatDate(date);
}
/**
 * 获取差距date有n天的时间
 * 
 * @param date {any} /2016-01-01 23:59:59/
 * @param days {int} 0为date当天，1为date的下一天，-1为date的上一天，以此类推
 * @returns {String} /2016-01-01 23:59:59/
 */
dateUtil.getDatebyDays = function (dateStr, days) {
    var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    date.setDate(date.getDate() + days);
    return dateUtil.formatDate(date);
}
/**
 * 获取差距date有n月的时间
 * 
 * @param date {any} /2016-01-01 23:59:59/
 * @param months {int} 0为date当天，1为date的下一月，-1为date的上一月，以此类推
 * @returns {String} /2016-01-01 23:59:59/
 */
dateUtil.getDatebyMonths = function (dateStr, months) {
    var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    date.setMonth(date.getMonth() + months);
    return dateUtil.formatDate(date);
}
/**
 * 获取差距date有n年的时间
 * 
 * @param date {any} /2016-01-01 23:59:59/
 * @param years {int} 0为date当天，1为date的下一年，-1为date的上一年，以此类推
 * @returns {String} /2016-01-01 23:59:59/
 */
dateUtil.getDatebyYears = function (dateStr, years) {
    var date = new Date(Date.parse(dateStr.replace(/-/g, "/")));
    date.setFullYear(date.getFullYear() + years);
    return dateUtil.formatDate(date);
}
/**
 * 获取某月第一天与最后一天
 * 
 * @param {any} dateStr /支持new Date()可接收的多种格式，如'2019-04-01'、'2019/04/01'、1554975369057等/
 * @returns {object} /{ firstDay:2019-04-01 00:00:00, lastDay:2019-04-01 00:00:00 }/
 */
dateUtil.getFirstDayAndLastDay = function (dateStr) {
    var firstDayTime = new Date(dateStr).setDate(1);
    var firstDay = dateUtil.formatDate(new Date(firstDayTime));
    var lastDay = dateUtil.getDatebyDays(dateUtil.getDatebyMonths(firstDay, 1), -1);
    return {
        firstDay: firstDay,
        lastDay: lastDay
    };
}
/**
 * 计算时长
 * 
 * @param {any} duration 00时00分00秒
 * @param {any} n 单位：秒
 * 
 * @returns {String}/00时00分10秒/
 */
dateUtil.calculateDuration = function (duration, n) {
    try {
        var hours = parseInt(duration.split('时')[0], 10),
            minutes = parseInt(duration.split('时')[1].split('分')[0], 10),
            seconds = parseInt(duration.split('时')[1].split('分')[1].substring(0, 2), 10);

        function formatter(hour, minute, second) {
            var hour1 = '00',
                minute1 = '00',
                second1 = '00';
            if (hour > 0) {
                hour1 = hour < 10 ? '0' + hour : hour;
            }
            if (minute > 0) {
                minute1 = minute < 10 ? '0' + minute : minute;
            }
            if (second > 0) {
                second1 = second < 10 ? '0' + second : second;
            }
            return hour1 + '时' + minute1 + '分' + second1 + '秒';
        }

        if (seconds + n >= 60) {
            var seconds1 = (seconds + n) % 60,
                minutes1 = minutes + (seconds + n - seconds1) / 60;
            if (minutes1 > 60) {
                var minutes2 = minutes1 % 60,
                    hours1 = hours + (minutes1 - minutes2) / 60;
                return formatter(hours1, minutes2, seconds1);
            } else {
                return formatter(hours, minutes1, seconds1);
            }
        } else {
            return formatter(hours, minutes, seconds + n);
        }

    } catch (ex) {
        return '00时00分00秒';
    }
}
/**
 * 时长转秒数
 * 
 * @param {any} duration 00时01分00秒
 * @returns {any}/60/
 */
dateUtil.durationToMinutes = function (duration) {
    try {
        var hours = parseInt(duration.split('时')[0]) || 0,
            minutes = parseInt(duration.split('时')[1].split('分')[0]) || 0,
            seconds = parseInt(duration.split('时')[1].split('分')[1].substring(0, 2)) || 0;
        return hours * 60 * 60 + minutes * 60 + seconds;
    } catch (ex) {
        return 0;
    }

}
/**
 * 秒数转时长
 * 
 * @param {any} minutes 60
 * @returns {any}/00:01:00/
 */
dateUtil.secondsToDuration = function (secondCounts) {
    try {
        var seconds = secondCounts % 60;
        var theSeconds = seconds < 10 ? "0" + seconds : seconds;
        if (seconds != secondCounts) {
            var minuteCounts = (secondCounts - seconds) / 60;
            var minutes = minuteCounts > 60 ? minuteCounts % 60 : minuteCounts;
            var theMinutes = minutes < 10 ? "0" + minutes : minutes;
            if (minutes != minuteCounts) {
                var hours = (minuteCounts - minutes) / 60;
                var theHours = hours < 10 ? "0" + hours : hours;
                return theHours + ":" + theMinutes + ":" + theSeconds;
            } else {
                return "00:" + theMinutes + ":" + theSeconds;
            }
        } else {
            return "00:00:" + theSeconds;
        }
    } catch (ex) {
        return "";
    }
}
/**
 * 获取当前年月日(中文分割)
 * @returns {String}/2016年01月01日/
 */
dateUtil.getFormatCAPDate = function () {
    var date = new Date();
    var seperator1 = "年";
    var seperator2 = "月";
    var seperator3 = "日";
    var Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    if (Month >= 1 && Month <= 9) {
        Month = "0" + Month;
    }
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var currentdate = Year + seperator1 + Month + seperator2 + Day + seperator3;
    return currentdate;
}
/**
 * 格式化传入时间为年月日(中文分割)
 * @param {any} date /Mon Nov 20 2017 14:28:48 GMT+0800 (中国标准时间)/
 * @param {String} end /默认输出年月日格式，end传入"月"参数，输出年月格式/
 * @returns {String}/2016年01月01日 或 2016年01月/
 */
dateUtil.formatCAPDate = function (date, end) {
    !date && (date = new Date());
    var seperator1 = "年";
    var seperator2 = "月";
    var seperator3 = "日";
    var Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    if (Month >= 1 && Month <= 9) {
        Month = "0" + Month;
    }
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var formatDate;
    if (end == "月") {
        formatDate = Year + seperator1 + Month + seperator2;
    } else {
        formatDate = Year + seperator1 + Month + seperator2 + Day + seperator3;
    }
    return formatDate;
}
/**
 * 获取当前年月日(‘-’分割)
 * @returns {String}/2016-01-01/
 */
dateUtil.getFormatLOWDate = function () {
    var date = new Date();
    var seperator1 = "-";
    var Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    if (Month >= 1 && Month <= 9) {
        Month = "0" + Month;
    }
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var currentdate = Year + seperator1 + Month + seperator1 + Day;
    return currentdate;
}
/**
 * 获取当前年月日(‘/’分割)
 * @returns {String}/21/01/2016/
 */
dateUtil.getFormatSLADate = function () {
    var date = new Date();
    var seperator1 = "/";
    var Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    if (Month >= 1 && Month <= 9) {
        Month = "0" + Month;
    }
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var currentdate = Day + seperator1 + Month + seperator1 + Year;
    return currentdate;
}
/**
 * 获取当前年月日 时分秒
 * @returns {String}/2016年01月01日 23时59分59秒/
 */
dateUtil.getFormatFullDate = function () {
    var date = new Date();
    var seperator1 = "年";
    var seperator2 = "月";
    var seperator3 = "日";
    var seperator4 = "时";
    var seperator5 = "分";
    var seperator6 = "秒";
    var Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    if (Month >= 1 && Month <= 9) {
        Month = "0" + Month;
    }
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    if (Hours >= 0 && Hours <= 9) {
        Hours = "0" + Hours;
    }
    if (Minutes >= 0 && Minutes <= 9) {
        Minutes = "0" + Minutes;
    }
    if (Seconds >= 0 && Seconds <= 9) {
        Seconds = "0" + Seconds;
    }
    var currentdate = Year + seperator1 + Month + seperator2 +
        Day + seperator3 + " " + Hours + seperator4 + Minutes + seperator5 + Seconds + seperator6;
    return currentdate;
}
/**
 * 获取当前年月日(美式写法)
 * @returns {String}/June 15,2016/
 */
dateUtil.getFormatUSADate = function () {
    var date = new Date();
    var seperator1 = ",";
    var Year = date.getFullYear();
    var MM = date.getMonth();
    var Day = date.getDate();
    var MonthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Month = MonthArr[MM];
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var currentdate = Month + " " + Day + seperator1 + Year;
    return currentdate;
}
/**
 * 获取当前年月日(英式写法)
 * @returns {String}/15 June,2016/
 */
dateUtil.getFormatUKDate = function () {
    var date = new Date();
    var seperator1 = ",";
    var Year = date.getFullYear();
    var MM = date.getMonth();
    var Day = date.getDate();
    var MonthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Month = MonthArr[MM];
    if (Day >= 0 && Day <= 9) {
        Day = "0" + Day;
    }
    var currentdate = Day + " " + Month + seperator1 + Year;
    return currentdate;
}
/**
 * 处理日期中带有中文
 */
dateUtil.ZNToNum = function (text) {
    var arr = text.split('年')
    var arr2 = arr[1].split('月');
    var arr3 = arr2[1].split('日');
    return arr[0] + '-' + (arr2[0] < 9 ? '0' + arr2[0] : arr2[0]) + '-' + (arr3[0] < 9 ? '0' + arr3[0] : arr3[0]);
}
/**
 * 获取时间差
 * @param {String} 2018-05-07 23:18:54
 */
dateUtil.timeInterval = function (start, end) {
    var startTime = Date.parse(start.replace(/-/g, '/')); //开始时间
    var endTime = Date.parse(end.replace(/-/g, '/')); //结束时间
    // 从数学上来说，时间差应该是“结束时间 - 开始时间 + 1s”
    var usedTime = Math.abs(parseFloat(startTime) - parseFloat(endTime) + 1000); //两个时间戳相差的毫秒数
    var flag = ((startTime - endTime) > 0) ? '-' : '+';
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    var seconds = Math.floor((usedTime - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000); //取得算出分后剩余的秒数

    var timeIntervalObj = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        usedTime: usedTime,
        flag: flag
    };
    return timeIntervalObj;
};
/**
 * 字符串日期转阿拉伯日期
 * @param {String} 2018年05月07日
 * @returns {String} 2018-05-07
 */
dateUtil.dateStrToDate = function (dateStr) {
    try {
        return dateStr.replace('年', '-').replace('月', '-').replace('日', '')
    } catch (e) {
        return "";
    }
}
/**
 * 将日期转成没有自动补零的日期
 * @param {String} 2018年05月07日
 * @returns {String} 2018年5月7日
 */
dateUtil.formatDateNoZero = function (date) {
    var myDate = new Date(dateUtil.dateStrToDate(date));
    try {
        return myDate.getFullYear() + "年" + myDate.getMonth() + 1 + "月" + myDate.getDate();
    } catch (e) {
        return "";
    }
}
/**
 * 日期转大写
 * @param {String} 2018年05月07日
 * @returns {String} 二〇一八年五月七日
 */
dateUtil.dateToDATE = function (date) {
    var sCN = '〇一二三四五六七八九十';
    if (date.slice(0, 10).match(/\d/g) === null) {
        return date;
    }
    try {
        var year = date.split("年")[0],
            month = parseInt(date.split("年")[1].split("月")[0]),
            day = parseInt(date.split("年")[1].split("月")[1].split("日")[0]);
        var newYear = sCN.charAt(parseInt(year.charAt(0))) +
            sCN.charAt(parseInt(year.charAt(1))) +
            sCN.charAt(parseInt(year.charAt(2))) +
            sCN.charAt(parseInt(year.charAt(3)));
        var newMonth = month <= 10 ?
            sCN.charAt(month) :
            '十' + sCN.charAt(parseInt(month.toString().charAt(1)));
        var newDay = day <= 10 ?
            sCN.charAt(day) :
            (day < 20 ?
                '十' + sCN.charAt(parseInt(day.toString().charAt(1))) :
                sCN.charAt(parseInt(day.toString().charAt(0))) + '十' + sCN.charAt(parseInt(day.toString().charAt(1))));
        if (day % 10 === 0 && day > 10) {
            newDay = sCN[day / 10] + "十";
        }
        return newYear + "年" + newMonth + "月" + newDay + "日";
    } catch (e) {
        return "";
    }
};
/**
 * 格式化时间日期格式
 * @param {String} date Date
 * @param {String} format yyyy-MM-dd hh:mm:ss or yyyy-MM-dd or hh:mm:ss
 * @returns {String} 
 */
dateUtil.formatByFmt = function (date, format) {
    if (arguments.length == 0) {
        return "";
    }
    var fmt = format ? format : 'yy-MM-dd';
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
/**
 * 格式化日期时间为对象
 * @param {dateTime} dateTime 
 */
dateUtil.formatDateTimeToObj = function (dateTime) {
    try {
        var obj = {};
        var date = dateTime.split(" ")[0];
        var time = dateTime.split(" ")[1];
        obj.year = date.split("-")[0];
        obj.month = date.split("-")[1];
        obj.day = date.split("-")[2];
        obj.hour = time.split(":")[0];
        obj.minute = time.split(":")[1];
        obj.second = time.split(":")[2];
        return obj;
    } catch (e) {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            second: ''
        }
    }
}
/**
 * 格式化星期显示为中文
 * @param {num} //周数字0,1,2,3,4,5,6,7
 * @return {string}  //中文字符日,一,二,三,四,五,六
 */
dateUtil.formatWeekDay = function (num) {
    switch (Number(num)) {
        case 0:
            return "日";
        case 1:
            return "一";
        case 2:
            return "二";
        case 3:
            return "三";
        case 4:
            return "四";
        case 5:
            return "五";
        case 6:
            return "六";
    }
}
/**
 * 处理日期中带有中文(yyyy年MM月dd日HH时mm分  转成  YYYY-MM-DD hh:mm:ss)
 * 
 * @param {JSON} params 参数
 * @param {String} params.dateStr      时间字符串  2019年11月12日
 * @param {String} params.splitMap     切割map    ['年', '月', '日']
 * @param {String} params.joinSign     拼接map    ['-', '-']
 */
dateUtil.newZNToNum = function (params) {
    if (!params.dateStr) {
        return "";
    }
    if (params.dateStr.substr(params.dateStr.length - 1, 1) != params.splitMap[params.splitMap.length - 1]) {
        // console.error("日期数据格式错误");
        return params.dateStr;
    }
    var obj = {};
    var res = '';
    var j = 0; //joinSign 下标记录
    for (var i = 0, len = params.splitMap.length; i < len; i++) {
        if (!i) {
            obj[i] = params.dateStr.split(params.splitMap[i]);
            res += obj[i][0];
        } else {
            obj[i] = obj[i - 1][1].split(params.splitMap[i]);
            res += params.joinSign[j++];
            res += (obj[i][0] + '').length < 2 ? '0' + obj[i][0] : obj[i][0];
        }
    }
    //补充00
    if (j < params.joinSign.length) {
        for (; j < params.joinSign.length; j++) {
            res += params.joinSign[j];
            res += '00';
        }
    }
    return res;
}
export default dateUtil;