import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<ModalOverlay>
			<ModalBackdrop onClick={handleCloseClick} />
			<ModalContent>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<a href="#" onClick={handleCloseClick}>
						✖
					</a>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}
};

const ModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBackdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const ModalContent = styled.div`
	background: white;
	width: 500px;
	height: 600px;
	border-radius: 5px;
	padding: 15px;
	z-index: 1;
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ModalTitle = styled.h1`
	font-weight: 700;
	text-transform: capitalize;
`;

const ModalBody = styled.div`
	padding-top: 10px;
`;

export default Modal;
