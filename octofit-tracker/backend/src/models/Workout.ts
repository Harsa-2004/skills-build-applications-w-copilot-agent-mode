import mongoose, { Document, Schema } from 'mongoose'

interface IWorkout extends Document {
  userId: mongoose.Types.ObjectId
  name: string
  description: string
  duration: number
  calories: number
  date: Date
  createdAt: Date
  updatedAt: Date
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const Workout = mongoose.model<IWorkout>('Workout', workoutSchema)

export default Workout
