const jwt = require("jsonwebtoken");

const secret_key = "mern-market";


const auth = async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  const token = await req.headers.authorization.split(" ")[1]
  // const token = await req.headers.authorization

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGFwcGxlLmNvbSIsImlhdCI6MTcyNzI0MzExMCwiZXhwIjoxNzI3MzI1OTEwfQ.zU9095QEgB4JiKvfZGleYnqVEs0CPNTi9XCYVPO0hJI";

  if(!token) {
    return res.status(401).json({message: "トークンがありません"});
  }

  try{
    const decoded = jwt.verify(token, secret_key);
    req.body.email = decoded.email;
    return next();
  }catch(err){
    return res.status(400).json({message: "トークンが正しくないので、ログインして下さい"});
  }
}

module.exports = auth;
