import colors from "colors"
import mongoose from "mongoose"

const connectDb = async () => {

	const url = process.env.DATABASE as string

	try {
		const connection = await mongoose.connect(url)
		console.log(colors.cyan("database connected"))
	} catch (error) {
		console.log(colors.red.bold(error))
	}
}

export default connectDb 
