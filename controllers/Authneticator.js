const { OAuth2Client } = require("google-auth-library"); 
console.log("google authenticator");
const googleAuth=async(req,res)=>{
    try{
        const {credential}=req.body;
        console.log("cred",credential);
        const CLIENT_ID="148388239184-5afa0ejenmi1t6gr9r444rkdpj7gn8mj.apps.googleusercontent.com";
        const client=new OAuth2Client(CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: CLIENT_ID, 
          });
          console.log(ticket);
          res.json({message:"success"});
    }
    catch(err){
        console.log("ERROR AUTHENTICATING GOOGLE TOKEN",err);
        res.json({message:"error"});
    }
}
module.exports.googleAuth=googleAuth;