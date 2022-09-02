/**
 * Mongoose module.
 * @file 数据库模块
 * @module core/mongoose
 * @author  biaochenxuying <https://github.com/biaochenxuying>
 */

import consola from 'consola'
import * as CONFIG from '../app.config.js'
import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

// remove DeprecationWarning
mongoose.set('useFindAndModify', false)


// mongoose Promise
mongoose.Promise = global.Promise

// mongoose

// connect
const connect = () => {
    // console.log('CONFIG.MONGODB.uri :', CONFIG.MONGODB.uri)

	// 连接数据库
	mongoose.connect(CONFIG.MONGODB.uri, {
		promiseLibrary: global.Promise,
		useMongoClient: true
	})

	// 连接错误
	mongoose.connection.on('error', error => {
		consola.warn('数据库连接失败!', error)
	})

	// 连接成功
	mongoose.connection.once('open', () => {
		consola.ready('数据库连接成功!')
	})

	// 自增 ID 初始化
	autoIncrement.initialize(mongoose.connection)
	
	// 返回实例
	return mongoose
}

export {
	connect,
	mongoose,
}