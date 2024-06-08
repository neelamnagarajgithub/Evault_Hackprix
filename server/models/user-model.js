import mongoose from 'mongoose';
import  validator  from 'validator';

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"a name is required for a user"],
  },
  email:{
    type:String,
    required:[true,"a email is required for a user"],
    unique:true,
    validate:[validator.isEmail,"not a valid email"]
  },
  image:{
    type:String,
    required:[true,"a image is required for user"]
  },
  displayName: String,
  firstName: String,
  lastName: String,
});

userSchema.statics.findOrCreate = async function (conditions, doc) {
  const result = await this.findOne(conditions);
  return result || this.create(doc);
};

const User = mongoose.model('User', userSchema);

export default User;