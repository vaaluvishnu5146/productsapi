const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        minLength: 15,
        maxLength: 30
    },
    age:  {
        type: Number,
        required: true,
        min: 1,
        max: 120
    },
    password:  {
        type: String,
        required: true
    },
    contactNumber:  {
        type: Number,
        required: true
    }
});

const UserModel = mongoose.model("user", UserSchema);


async function main() {
    const mongoDBURI = "mongodb://localhost:27017/recipes";
    // mongoose.connect(mongoDBURI).then((response) => {
    //     console.log(response)
    // }).catch((error) => {
    //     console.log(error)
    // })
    try {
        await mongoose.connect(mongoDBURI);
        // Start writting query
        // 1. Create a user
        // const newUser = await UserModel.create({
        //     name: "Siddhu",
        //     age: 12,
        //     email: "sid@gmail.com",
        //     password: "password123",
        //     contactNumber: 9089786756
        // });
        // console.log(newUser);

        // 2. Retreiving data
        // const users = await UserModel.find({ name: "Arshadkhan" });
        // console.log(users)

        // 3. update the data
        // const response = await UserModel.findByIdAndUpdate("6712728f481ada56017381f1", { name: "rajinikanth", age: 73, email: "rajini@gmail.com", contactNumber: 2343 }, { new: true });
        // console.log(response);

        // 4. DELETE a record
        const response = await UserModel.findByIdAndDelete("67127645715bbd6a9f93cdf3");
        console.log(response);
    } catch (error) {
        console.log(error.message)
    }
}

main();
