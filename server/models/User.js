const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const dogSchema = require('./Dog');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        savedDogs: [dogSchema],
    },
    //might need this later for the virtual below
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `dogCount` with the number of saved dogs we have
// userSchema.virtual('dogCount').get(function () {
//     return this.savedDogs.length;
// });

const User = model('User', userSchema);

module.exports = User;
