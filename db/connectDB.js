const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOOSE_URI).then(
	() => console.log('Connected to MongoDB')
).catch((err)=> console.log())