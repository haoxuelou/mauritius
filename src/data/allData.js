const HomeList = [
	'（一）国家概况',
	'（二）入境须知',
	'（三）安全防范',
	'（四）交通出行',
	'（五）物价医疗',
	'（六）实用信息',
	'（七）深度了解',
];

const HomeDetail = new Map([
	[
		HomeList[0], require('../webpage/home/1.html')
	],
	[
		HomeList[1], require('../webpage/home/2.html')
	],
	[
		HomeList[2], require('../webpage/home/3.html')
	],
	[
		HomeList[3], require('../webpage/home/4.html')
	],
	[
		HomeList[4], require('../webpage/home/5.html')
	],
	[
		HomeList[5], require('../webpage/home/6.html')
	],
	[
		HomeList[6], require('../webpage/home/7.html')
	]
]);

const CameraList = [
	'外币',
	'服务及生意',
	'在酒店房间内',
	'附件；辅助程序',
	'在海滩',
	'酒店活动',
	'食品和饮品（餐饮）',
	'礼物',
	'运输；交通',
	'天气预报',
	'丢失或盗窃',
	'健康'
];

const CameraDetail = new Map([
	[

	],
	[
	],
	[
	],
	[
	],
	[
	],
	[
	],
]);

const BellList = [
	'（一）常用电话',
	'（二）领事提醒',
	'（三）领事保护与协助',
];

const BellDetail = new Map([
	[
		BellList[0], require('../webpage/bell/1.html')
	],
	[
		BellList[1], require('../webpage/bell/2.html')
	],
	[
		BellList[2], require('../webpage/bell/3.html')
	],
]);

export {
	HomeList, HomeDetail,
	CameraList, CameraDetail,
	BellList, BellDetail,
};