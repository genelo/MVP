const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/groups`)


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them


var UserInfoSchema = new mongoose.Schema({
  email : { type:String, unique:true},
  username : String,
  password : String,
  groups : Array,
  results :  Array
});

let UserInfo = mongoose.model('UserInfo', UserInfoSchema);


module.exports.register = async (userInfo) => {
  return await UserInfo.create(userInfo);
};

module.exports.login = async (userInfo)=> {
 const user = await UserInfo.findOne({username: userInfo.username, password:userInfo.password});

 if(user) {
  return user;
 }else {
  return null;
 }
}

module.exports.saveGroup = async (userInfo) => {
  return await UserInfo.findOneAndUpdate({email: userInfo.email}, userInfo, {upsert:true});
}


