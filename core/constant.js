/**
 * Constants module.
 * @file 数据表常量模块
 * @module core/constants
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */


// 发布状态
export const PUBLISH_STATE = {
	draft: 0, // 草稿
	published: 1, // 已发布
	recycle: -1, // 回收站
};

// 公开状态
export const PUBLIC_STATE = {
	password: 0, // 需要密码
	public: 1, // 公开状态
	secret: -1, // 私密
};

// 转载状态
export const ORIGIN_STATE = {
	original: 0, // 原创
	reprint: 1, // 转载
	hybrid: -1, // 混合
};

export const COMMENT_STATE = {
	auditing: 0, // 待审核
	published: 1, // 通过正常
	deleted: -1, // 已删除
	spam: -2, // 垃圾评论
};

// 评论宿主页面的 POST_ID 类型
export const COMMENT_POST_TYPE = {
	guestbook: 0, // 留言板
};

// 评论本身的类型
export const COMMENT_PARENT_TYPE = {
	self: 0, // 自身一级评论
};

// 排序状态
export const SORT_TYPE = {
	asc: 1, // 升序
	desc: -1, // 降序
};

// 喜欢类型
export const LIKE_TYPE = {
	comment: 1,
	page: 2,
};
