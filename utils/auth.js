const jwt = require("jsonwebtoken");

const secret_key = "mern-market";


const auth = async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  // const token = await req.headers.authorization.split(" ")[1];
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTcyNTcwMzc5NiwiZXhwIjoxNzI1Nzg2NTk2fQ.-ELnN_ZeavAFbBWN03NaS0hjT8QD4rQsgcuoP8hmpNg";

  if(!token) {
    return res.status(400).json({message: "トークンがありません"});
  }

  try{
    const decoded = jwt.verify(token, secret_key);
    req.body.email = decoded.email;
    next();
  }catch(err){
    return res.status(400).json({message: "トークンが正しくないので、ログインして下さい"});
  }
}

module.exports = auth;