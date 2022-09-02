/*
 * @Author: peng.chen03
 * @Date: 2022-09-02 14:55:55
 * @LastEditTime: 2022-09-02 16:51:13
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /models/option.js
 */
/**
 * Option model module.
 * @file 设置网站数据模型
 * @module model/option
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const { mongoose } = require('../core/mongodb.js');

const optionSchema = new mongoose.Schema({
	// 网站标题
	title: { type: String, required: true },

	// logo 图片
	logo: { type: String, required: true },

	// 网站副标题
	sub_title: { type: String, required: true },

	// 关键字
	keywords: [{ type: String }],

	// 网站描述
	description: String,

	// 站点地址
	site_url: { type: String, required: true },

	// 网站官邮
	site_email: String,

	// 备案号
	site_icp: String,

	// 搜索引擎 ping
	ping_sites: [{ type: String, validate: /\S+/ }],

	// 其他元信息
	meta: {
		// 被喜欢次数
		likes: { type: Number, default: 0 },
	},
});

export default mongoose.model('Option', optionSchema);