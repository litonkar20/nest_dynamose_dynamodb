import * as dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },

    name: String,
    email: {
      type: String,
      required: true,
    },

    mobile: Number,
    dob: String,
    gender: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = dynamoose.model('User_Master', userSchema);

export default User;
