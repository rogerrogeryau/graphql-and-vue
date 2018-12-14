const bcrypt = require("bcrypt");

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

            return newUser;
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
            console.log(`pw: ${password}`)
            console.log(`hashed pw: ${user.password}`)
            console.log(isPaswordValid)
            return user


            
        }
    }
}