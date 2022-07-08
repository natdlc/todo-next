import List from "./List";
import AddItemModal from "./AddItemModal";
import { useState } from "react";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const modalOpenHandler = () => setShowModal(true);
	return (
		<>
			<div className="max-w-lg flex flex-col mx-auto w-5/6">
				<List />
				<button
					className="
        block border border-black
        w-28 py-2 rounded-full
        hover:bg-black hover:text-white"
					onClick={modalOpenHandler}
				>
					Add
				</button>
				<AddItemModal showModal={showModal} setShowModal={setShowModal} />
			</div>
		</>
	);
};

export default Home;
