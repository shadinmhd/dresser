import Navbar from "../components/Navbar"

const Home = () => {
	return (
		<div className="flex flex-col h-screen min-h-screen w-screen items-center">
			<Navbar />
			<div className="h-full w-screen bg-black">
				Home
			</div>
		</div>
	)
}

export default Home
