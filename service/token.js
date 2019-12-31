const jwt = require('jsonwebtoken');
const serect = 'token';  //生成token所需要的密钥

let token = {
    addToken: (userInfo) => {
        const token = jwt.sign({ //这个函数需要三个参数, 第一个一般是登陆用户的名字, 第二个就是上面定义的密钥,第三个是过期时间 单位是s ,不过还可以写 {expiresIn:'2h'}(代表2小时)
            user: userInfo.user
        }, serect, {expiresIn: 1});
        return token;
    },
    decrypt: (token) => {
        if (token) {
            let toke = tokens.split(' ')[1];
            // 解析
            let decoded = jwt.decode(toke, serect); //解析token需要两个参数,密钥 以及 前台传递的token
            return decoded;
        }
    }
}

exports = module.exports = token;