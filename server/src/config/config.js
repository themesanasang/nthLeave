module.exports = {
 port: process.env.PORT || 8081,
 db: {
    database: process.env.DB_NAME || 'nthLeave',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './nthLeave.sqlite'
    }
 }
}

