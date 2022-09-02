import crypto from 'crypto';
const MD5_SUFFIX = 'www.biaochenxuying.cn*&^%$#'; 
const md5 = function(pwd) {
	let md5 = crypto.createHash('md5');
	return md5.update(pwd).digest('hex');
};
const responseClient = (res, httpCode = 500, code = 3, message = '服务端异常', data = {}) => {
	let responseData = {};
	responseData.code = code;
	responseData.message = message;
	responseData.data = data;
	res.status(httpCode).json(responseData);
};
const timestampToTime = (timestamp) => {
	const date = new Date(timestamp);
	const Y = date.getFullYear() + '-';
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
	const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
	const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
	const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
};
export {
	MD5_SUFFIX,
	md5,
	// 响应客户端
	responseClient,
	// 时间 格式化成 2018-12-12 12:12:00
	timestampToTime
};
