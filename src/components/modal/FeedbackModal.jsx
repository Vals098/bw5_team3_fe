import { Modal, Button } from "react-bootstrap";

const FeedbackModal = ({
  show,
  onClose,
  title,
  message,
  variant = "success",
}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header
        closeButton
        className={
          variant === "success"
            ? "bg-success text-white"
            : "bg-danger text-white"
        }
      >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>
        <Button
          variant={variant === "success" ? "success" : "danger"}
          onClick={onClose}
          autoFocus
        >
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FeedbackModal;