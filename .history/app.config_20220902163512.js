/**
 * App config module.
 * @file 应用运行配置
 * @module app.config
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

import path from 'path'
import yargs from 'yargs'
// import package from 'package
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const {argv} = yargs;

export const APP = {
	LIMIT: 10,
	PORT: 8000,
	ROOT_PATH: __dirname,
	NAME: 'biaochenxuying',
	URL: 'http://biaochenxuying.cn/main.html',
	FRONT_END_PATH: path.join(__dirname, '..', 'biaochenxuying'),
};

export const CROSS_DOMAIN = {
	allowedOrigins: [
		'http://biaochenxuying.cn/main.html',
		'http://biaochenxuying.cn',
		'https://github.com/biaochenxuying',
	],
	allowedReferer: 'biaochenxuying',
};

export const MONGODB = {
	uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/blogNode`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password',
};
export const AUTH = {
	data: argv.auth_data || { user: 'root' },
	jwtTokenSecret: argv.auth_key || 'blog-node',
	defaultPassword: argv.auth_default_password || 'root',
};

export const EMAIL = {
	account: argv.email_account || 'your email address like : i@biaochenxuying',
	password: argv.email_password || 'your email password',
	from: 'https://github.com/biaochenxuying',
	admin: 'biaochenxuying',
};

export const AKISMET = {
	key: argv.akismet_key || 'your akismet Key',
	blog: argv.akismet_blog || 'your akismet blog site, like: http://biaochenxuying.cn/main.html',
};

export const GITHUB = {
	username: 'biaochenxuying',
	oauth_uri: 'https://github.com/login/oauth/authorize',
	access_token_url: 'https://github.com/login/oauth/access_token',
	// 获取 github 用户信息 url // eg: https://api.github.com/user?access_token=****&scope=&token_type=bearer
	user_url: 'https://api.github.com/user',

	// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
	// // 生产环境
  // redirect_url: 'http://biaochenxuying.cn/login',
  // client_id: '*****',
	// client_secret: '*****',

	// 开发环境 （参数可以直接用，公供测试）
	redirect_url: "http://localhost:3001/login",
  	client_id: "502176cec65773057a9e",
	client_secret: "65d444de381a026301a2c7cffb6952b9a86ac235",
	
};

export const ALIYUN = {
	ip: argv.aliyun_ip_auth,
};

export const BAIDU = {
	site: argv.baidu_site || 'your baidu site domain like : biaochenxuying',
	token: argv.baidu_token || 'your baidu seo push token',
};

export const QINIU = {
	accessKey: argv.qn_accessKey || 'your access key',
	secretKey: argv.qn_secretKey || 'your secret key',
	bucket: argv.qn_bucket || 'your bucket name',
	origin: argv.qn_origin || 'http://nodepress.u.qiniudn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/',
};

export const INFO = {
	// name: package.name,
	// version: package.version,
	// author: package.author,
	// site: exports APP.URL,
	github: 'https://github.com/biaochenxuying',
	powered: ['react', 'Nodejs', 'MongoDB', 'Express', 'Nginx'],
};
