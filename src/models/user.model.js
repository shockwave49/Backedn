import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
        username:{
            type : String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },

        email:{
            type : String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
        },

        fullname:{
            type : String,
            required:true,
            trim:true,
            index:true
            
        },

        avatar:{
            type : String, //cloudinary url
            required:true
        },

        coverImage:{
            type : String,
            required:true
        },

        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],

        password:{
            type:String,
            required:[true,"password is required"]
        },

        refreshToken:{
            type:String
        }
    }
    ,{
        timestamps:true
    }

    
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
    else{
        this.password=bcrypt.hash(this.password,10)
        next()
    }
})

userSchema.method.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.method.generateAccessToken=function(){
   return jwt.sign(

        //give the payload for the jwt token
        {
            _id:this.id,
            email:this.email,
            username:this.username,
            fullname:this.fullname

        },

        //give here the secret key 
        process.env.ACCESS_TOKEN_SECRET,
        //here gives the expire time
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY

        }
    )
}


userSchema.method.generateRefreshToken=function(){
    return jwt.sign(
 
         //give the payload for the jwt token
         {
             _id:this.id,
            
 
         },
 
         //give here the secret key 
         process.env.REFRESH_TOKEN_SECRET,
         //here gives the expire time
         {
             expiresIn:process.env.REFRESH_TOKEN_EXPIRY
 
         }
     )
 }


export const User=mongoose.model("User",userSchema)