import dotenv = require('dotenv');
const environ: dotenv.DotenvResult = dotenv.config({ path: './src/variables.env' });
if(environ.error) {
    throw environ.error
}

const crypto = require('crypto');
// const knex = require('knex')(require('../../knexfile'));
const knex = require('knex')({
    client: process.env.MYSQL_CLIENT,
    connection: {
        host: process.env.MYSQL_URI,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE
    }
})

const store = {
    createUser: ({ username, password }) => {
        console.log(`Add user ${username}`);
        const { salt, hash } = saltHashPassword({ password });
        return knex('user').insert({
            salt,
            encrypted_password: hash,
            username
        }).debug();        
    },
    authenticate: ({ username, password }) => {
        console.log(`Authenticate user ${username}`);
        return knex('user').where({ username })
            .then(([user]) => {
                if(!user) return { success: false };
                const { hash } = saltHashPassword({
                    password,
                    salt: user.salt
                });
                return { success: hash === user.encrypted_password };
            })
    }
}

function saltHashPassword({
    password,
    salt = randomString()
}) {
    const hash = crypto
        .createHmac('sha512', salt)
        .update(password);
    return {
        salt,
        hash: hash.digest('hex')
    };
}

function randomString() {
    return crypto.randomBytes(4).toString('hex');
}

export { store }