//

/*
 * 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */
function random(dayseed, indexseed) {
	var n = dayseed % 11117;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n;
		n = n % 11117;   // 11117 是个质数
	}
	return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

var weeks = ["日", "一", "二", "三", "四", "五", "六"];
var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
var activities = [
	{ name: "写单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低你的开发效率" },
	{ name: "洗澡", good: "你几天没洗澡了？", bad: "会把设计灵感洗掉", weekend: true },
	{ name: "锻炼一下身体", good: "", bad: "能量没消耗多少，吃得却更多", weekend: true },
	{ name: "抽烟", good: "抽烟有利于提神，增加思维敏捷", bad: "除非你活够了，死得早点没关系", weekend: true },
	{ name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
	{ name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },
	{ name: "使用%t", good: "你看起来更有品位", bad: "别人会觉得你在装逼" },
	{ name: "跳槽", good: "该放手时就放手", bad: "鉴于当前的经济形势，你的下一份工作未必比现在强" },
	{ name: "招人", good: "你遇到千里马的可能性大大增加", bad: "你只会招到一两个混饭吃的外行" },
	{ name: "面试", good: "面试官今天心情很好", bad: "面试官不爽，会拿你出气" },
	{ name: "申请加薪", good: "老板今天心情很好", bad: "公司正在考虑裁员" },
	{ name: "晚上加班", good: "晚上是程序员精神最好的时候", bad: "", weekend: true },
	{ name: "在妹子面前吹牛", good: "改善你矮穷挫的形象", bad: "会被识破", weekend: true },
	{ name: "撸管", good: "避免缓冲区溢出", bad: "小撸怡情，大撸伤身，强撸灰飞烟灭", weekend: true },
	{ name: "浏览成人网站", good: "重拾对生活的信心", bad: "你会心神不宁", weekend: true },
	{ name: "命名变量\"%v\"", good: "", bad: "" },
	{ name: "写超过%l行的方法", good: "你的代码组织的很好，长一点没关系", bad: "你的代码将混乱不堪，你自己都看不懂" },
	{ name: "提交代码", good: "遇到冲突的几率是最低的", bad: "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了" },
	{ name: "代码复审", good: "发现重要问题的几率大大增加", bad: "你什么问题都发现不了，白白浪费时间" },
	{ name: "开会", good: "写代码之余放松一下打个盹，有益健康", bad: "你会被扣屎盆子背黑锅" },
	{ name: "打DOTA", good: "你将有如神助", bad: "你会被虐的很惨", weekend: true },
	{ name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了" },
	{ name: "修复BUG", good: "你今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },
	{ name: "设计评审", good: "设计评审会议将变成头脑风暴", bad: "人人筋疲力尽，评审就这么过了" },
	{ name: "需求评审", good: "", bad: "可能会是根据手机壳颜色改变背景" },
	{ name: "上微博", good: "今天发生的事不能错过", bad: "会被老板看到", weekend: true },
	{ name: "重构", good: "头脑清醒，适合改善代码结构", bad: "你会造就一大堆麻烦问题" },
	{ name: "上B站", good: "还需要理由吗？", bad: "会被老板看到", weekend: true },
	{ name: "穿女装", good: "你会得到很多炙热的目光", bad: "", weekend: true },
	{ name: "上张大妈", good: "买买买", bad: "会被套路", weekend: true },
	{ name: "Steam买买买", good: "买买买", bad: "反正也不会玩", weekend: true }
];

var specials = [
	{ date: 20130221, type: 'good', name: '防核演习', description: '万一哪个疯子丢颗核弹过来...' }
];

var tools = ["Eclipse写程序", "记事本写程序", "Windows 10", "Linux", "macOS", "Android", "iPhone", "Vim写代码", "Atom写代码", "Visual Studio Code写代码", "Visual Studio写代码", "Windows Phone 手机", "Netbeans写程序", "Emacs写代码", "Git", "锤子写代码"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui", "virtual", "every", "abcd", "shit"];

var drinks = ["肥宅快乐水", "水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "牛奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "酒", "雪碧", "加多宝", "王老吉", "红牛"];

function getTodayString() {
	return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}

function star(num) {
	var result = "";
	var i = 0;
	while (i < num) {
		result += "★";
		i++;
	}
	while (i < 5) {
		result += "☆";
		i++;
	}
	return result;
}

// 生成今日运势
function pickTodaysLuck() {
	var numGood = random(iday, 98) % 3 + 2;
	var numBad = random(iday, 87) % 3 + 2;
	//numBad = Math.min(numBad, 5 - numGood);
	var eventArr = pickRandomActivity(numGood + numBad);

	var specialSize = pickSpecials();

	for (var i = 0; i < numGood; i++) {
		addToGood(eventArr[i]);
	}

	for (var i = 0; i < numBad; i++) {
		addToBad(eventArr[numGood + i]);
	}


}

function isWeekend() {
	return today.getDay() == 0 || today.getDay() == 6;
}

// 去掉一些不合今日的事件
function filter(activities) {
	var result = [];

	// 周末的话，只留下 weekend = true 的事件
	if (isWeekend()) {

		for (var i = 0; i < activities.length; i++) {
			if (activities[i].weekend) {
				result.push(activities[i]);
			}
		}

		return result;
	}

	return activities;
}

// 添加预定义事件
function pickSpecials() {
	var specialSize = [0, 0];

	for (var i = 0; i < specials.length; i++) {
		var special = specials[i];

		if (iday == special.date) {
			if (special.type == 'good') {
				specialSize[0]++;
				addToGood({ name: special.name, good: special.description });
			} else {
				specialSize[1]++;
				addToBad({ name: special.name, bad: special.description });
			}
		}
	}

	return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandomActivity(size) {
	var picked_events = pickRandom(filter(activities), size);

	for (var i = 0; i < picked_events.length; i++) {
		picked_events[i] = parse(picked_events[i]);
	}

	return picked_events;
}

// 从数组中随机挑选 size 个
function pickRandom(array, size) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}

	for (var j = 0; j < array.length - size; j++) {
		var index = random(iday, j) % result.length;
		result.splice(index, 1);
	}

	return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
	var result = { name: event.name, good: event.good, bad: event.bad };  // clone

	if (result.name.indexOf('%v') != -1) {
		result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
	}

	if (result.name.indexOf('%t') != -1) {
		result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
	}

	if (result.name.indexOf('%l') != -1) {
		result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
	}

	return result;
}

// 添加到“宜”
function addToGood(event) {
	jQuery('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
	jQuery('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

jQuery(document.body).ready(function () {
	jQuery('.date').html(getTodayString());
	jQuery('.direction_value').html(directions[random(iday, 2) % directions.length]);
	jQuery('.drink_value').html(pickRandom(drinks, 2).join());
	jQuery('.goddes_value').html(star(random(iday, 6) % 5 + 1));
	pickTodaysLuck();
});

