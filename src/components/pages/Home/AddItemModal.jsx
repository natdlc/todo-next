import { input1 } from "src/common/styles/Input";
import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";

const AddItemModal = ({ showModal, setShowModal }) => {
	const modalCloseHandler = () => setShowModal(false);
	return (
		<Modal onClose={modalCloseHandler} show={showModal} title="Add new task">
			<Input
				type="number"
				placeholder={"num here"}
				max="10"
				className="border" />
		</Modal>
	);
};

export default AddItemModal;
