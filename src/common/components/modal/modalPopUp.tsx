import * as React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface Props {
  openModal: boolean;
  closeModal: () => void;
  onYesClick: () => void;
  modalHeader: string;
  modalBody: string;
  toggle?: any;
}

export const ModalPopUp = (props: Props) => {
  return (
    <>
      <Modal isOpen={props.openModal} toggle={props.closeModal}>
        <ModalHeader toggle={props.toggle}>{props.modalHeader}</ModalHeader>
        <ModalBody>{props.modalBody}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="btn btn-md"
            onClick={props.onYesClick}
          >
            Yes
          </Button>{' '}
          <Button
            color="secondary"
            className="btn btn-md"
            onClick={props.closeModal}
          >
            No
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
