import List from "./List";
import AddItemModal from "./AddItemModal";
import { useState } from "react";
import { button1 } from "src/components/common/styles/Button";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const modalOpenHandler = () => setShowModal(true);
	return (
		<>
			<div className="max-w-lg flex flex-col mx-auto w-5/6">
				<List />
				<button
					className={button1}
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
