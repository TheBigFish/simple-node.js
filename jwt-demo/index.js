const jwt = require('jsonwebtoken');

const payload = {
    name: 'wanghao',
    admin: true
};

const secret = 'ILOVENINGHAO';

const token = jwt.sign(payload, secret, { expiresIn: '1day' });

console.log(token);

jwt.verify(token, secret, (error, decoded) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(decoded);
});
