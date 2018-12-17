const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require('./resolvers.js')

require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));


// verify JWT token passed from client
const getUser = async token =>{
  if (token) {
    try{
      let user = await jwt.verify(token, process.env.SECRET);
      console.log(user);
    } catch(err){
      // console.error(err);
      throw new AuthenticationError('Your session has ended. please sign in again.')
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: {

  //   User,
  //   Post
  // }

  context: async({ req }) =>{
    const token = req.headers["authorization"];
    return {User, Post, currentUser: await getUser(token)};

    // console.log(req.headers["authorization"])
    
  }
});

server.listen()
  .then(({ url }) => {
    console.log(`Server listening on ${url}`);
  })
  .catch((err)=>{console.log})
  ;