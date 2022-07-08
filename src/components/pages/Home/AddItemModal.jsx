import { button1 } from "src/components/common/styles/Button";
import { input1 } from "src/components/common/styles/Input";
import Button from "src/components/UI/Button/Button";
import Input from "src/components/UI/Input/Input";
import Modal from "src/components/UI/Modal/Modal";

const AddItemModal = ({ showModal, setShowModal }) => {
	const modalCloseHandler = () => setShowModal(false);
	return (
		<Modal onClose={modalCloseHandler} show={showModal} title="Add new task">
			<div>
				<Input
					type="text"
					placeholder={"Task title"}
					max="10"
					className={`${input1} w-full`}
				/>
			</div>
			<Button name="Add" className={button1} />
		</Modal>
	);
};

export default AddItemModal;
