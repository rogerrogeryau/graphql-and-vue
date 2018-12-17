const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// create token JSON
const createToken = (user, secret, expiresIn) =>{
    // de-structure user obj
    const { username, email } = user;
    return jwt.sign({ username, email }, secret, {expiresIn});
}


module.exports = {
    Query: {
        getUser: () => null,
        getPosts: async(_, args, {Post}) => {
            // get all posts
            const posts = await Post.find({}).sort({ createdDate: 'desc' }).populate({
                path:'createdBy',
                model:'User'
            });
            return posts;

        }
    },

    Mutation: {
        addPost: async(_, {title, imageUrl, categories, description, creatorId}, { Post }) => {
            const newPost = await new Post({
                title, 
                imageUrl, 
                categories, 
                description, 
                createdBy: creatorId
            }).save();

            return newPost;
        },

        signupUser: async(_, {username, email, password}, { User }) =>{
            const user = await User.findOne({ username });
            if (user) {
                throw new Error('User already exists!');
            }
            const newUser = await new User({
                username,
                email,
                password
            }).save();

            // return newUser;

            return {token: createToken(newUser,process.env.SECRET, '1hr')};
        },

        signinUser: async(_, {username, password}, { User }) =>{
            const user = await User.findOne({ username });
            if (!user) {
                throw new Error('User not found!');
            }
            // const isValidPassword = await bcrypt.compare(password, user.password)
            // console.log(isValidPassword)
            // // if (!isValidPassword) {
            // //     throw new Error("Invalud Password!!")
            // // }

            // bcrypt.compare(password, user.password, (err, result) => {
            //     console.log(result)
            //     return user

            // });
            let isPaswordValid =await bcrypt.compare(password, user.password)
            // console.log(`pw: ${password}`)
            // console.log(`hashed pw: ${user.password}`)
            // console.log(isPaswordValid)
            if (!isPaswordValid) {
                throw new Error('Password not matched!');
            }
            console.log(`PW:  ${user.password}`)
            
            
            // return user  //depreciated

            // return token with respect to the user found
            return {token: createToken(user,process.env.SECRET, '1hr')};


            
        }
    }
}