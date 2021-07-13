.App {
	text-align: center;
	display: flex;
	flex-direction: column;
}
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

function App() {
	return (
		<div className="App">
			<Header />
			<RecipeCard />
			<Footer />
		</div>
	);
}

export default App;
