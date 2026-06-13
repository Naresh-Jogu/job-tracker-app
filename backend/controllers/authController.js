const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")




const registerUser = async(req, res) =>{
    try{
        const {name, email, password} = req.body
         
        // step 2: check if user exists  
        const userExists = await User.findOne({email})
        if(userExists){
           return res.status(400).json({message: "Email alredy exists"})
        }

        // step 3: hash the password

        const hashedPassword = await bcrypt.hash(password, 10)

        // step 4: save the user to database

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // step 5: generate the jwt token 

        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        // step 6: send response

        res.status(201).json({
            token, user : {id: user._id, name: user.name, email: user.email}
        })


    }catch(err){
        res.status(500).json({message: err.message})
    }
}



const loginUser = async(req, res) =>{
    try{
        // step 1: get email and password from req body
        const {email, password} = req.body
        // step 2: find user by email if not found send err res
        const user = await User.findOne({email})
        if(!user){
           return res.status(404).json({message: "User not found"})
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        
        if(!isPasswordMatch){
            return res.status(401).json({message: "Password is incorrect"})
        }

        // generate token 

        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_SECRET, {expiresIn: "7d"})


        res.status(200).json( {token, message: "User Login Successfully"})

        

    }catch(err){
        res.status(500).json({message: err.message})
    }


}

module.exports = {registerUser, loginUser}



