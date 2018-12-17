const mongoose = require("mongoose");
const md5 = require("md5");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Post"
  }
});

// create and add avatar to users
UserSchema.pre("save", function(next){
  this.avatar = `http://gravatar.com/avatar/${md5(this.username)}?d=identicon`;
  // this.avatar = 
  next()
})


// hash password
UserSchema.pre("save", function(next){
  if (!this.isModified('password')) {
    // console.log(`${}`)
    return next();
  }

  bcrypt.genSalt(10,(err, salt)=>{
    if (err) return (err);

    bcrypt.hash(this.password,salt,(err, hash)=>{
      if(err) return next(err);
      // console.log(hash)
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);