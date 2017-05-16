module.exports = {
    //session设置
    sessionConfig : {
        redisStore: {
            host: '::ffff:127.0.0.1',
            port: 6379,
            prefix: "session"
        },
        secret : "recommand 128 bytes random string",
        maxAge : 60*60*1000
    }
}
