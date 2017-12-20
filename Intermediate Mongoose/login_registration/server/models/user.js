// require mongoose
var mongoose = require('mongoose');
// Add me
var Schema = mongoose.Schema;

//schema
var UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "this is for something else"],
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
  // phone: {
  //   type: String,
  //   validate: [{
  //     validator: function( number ) {
  //       return /\d{3}-\d{3}-\d{4}/.test( number );
  //     },
  //     message: "{ VALUE } is not a valid phone number"
  //   },
  //   {
  //     validator: function( number ) {
  //       return false;
  //     },
  //     message: "{ VALUE } failed this validator"
  //   }
  // ],
  //   required: [true, "Customer phone number required"]
  // },
  // gender: {
  //   type: String,
  //   enum: ['MALE', 'FEMALE'],
  //   uppercase: true,
  //   trim: true,
  //   default: "MALE"
  // },
  age: {
    type: Number,
    min: [18, "Maybe you need to be a little older"],
    max: [85, "You might want to be enjoying your retirement rather than using this site"],
    required: true
  },
  email: {
    type: String,
    required: [true, "this is for something else"],
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 32,
    validate: {
      validator: function( value ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  },

  // passwordConf: {
  //   type: String,
  //   required: true,
  //   minlength: 8,
  //   maxlength: 32,
  //   validate: {
  //     validator: function( value ) {
  //       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
  //     },
  //     message: "Password failed validation, you must have at least 1 number, uppercase and special character"
  //   }
  // },

  
  // pets: {
  //   type: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Pet"
  //   }],
  //   default: []
  // }
  // },
  
  // timestamps: {
  //   createdAt: 'created_at',
  //   updatedAt: 'updated_at'
  // }
});

var User = mongoose.model('User', UserSchema);

UserSchema.virtual( 'name.full' ).get( function () {
return this.firstName + " " + this.lastName;
// return `${ this.name.first } ${ this.name.last}`;
});

