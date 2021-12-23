const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
})

const Course = mongoose.model('Course', courseSchema)

async function getCoursesIn() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ['frontend', 'backend'] },
  })
    .sort('-price')
    .select('name author price')
}

async function getCoursesOr() {
  return await Course.find({ isPublished: true })
    .or([{ tags: 'frontend' }, { tags: 'backend' }])
    .sort('-price')
    .select('name author price')
}

async function getCoursesReg() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort('-price')
    .select('name author price')
}

async function run() {
  const courses = await getCoursesReg()
  console.log(courses)
}

run()
