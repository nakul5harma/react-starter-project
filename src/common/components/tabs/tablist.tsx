import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import {
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  Pencil,
  CirclePlus,
  Delete,
  Alert,
} from '../../../assets/icon-fonts/icons';
import { applicationPath } from '../../../config/routePath';

interface TabListProps extends RouteComponentProps {
  radObjArr: any;
  heading: string;
  onClickItem: any;
  id: string;
  editButton?: boolean;
  deleteButton?: boolean;
  modal?: boolean;
  navigator?: (id: string) => any;
  openModal?: (id: string) => any;
  deleteGroup?: () => any;
  toggleModal?: () => any;
}

const TabList = (props: TabListProps) => {
  return (
    <>
      {props.radObjArr.length !== 0 && (
        <ListGroup flush>
          <li className="tab-list-header d-flex justify-content-between align-items-center">
            {props.heading}
            {props.heading === 'RadGroups' ? (
              <CirclePlus
                size="1.25"
                className="text-primary cursor-pointer"
                onClick={() => {
                  props.history.push({
                    pathname: applicationPath.Home,
                  });
                }}
              />
            ) : (
              ''
            )}
          </li>

          {props.radObjArr.map((item: any, index: any) => (
            <ListGroupItem
              className="cursor-pointer d-flex justify-content-between align-items-center"
              key={index}
            >
              <div
                className="flex-grow-1 mr-3"
                onClick={() => props.onClickItem(item, props.history)}
              >
                {props.id ? item[props.id].name : item.name}{' '}
                <span className="list-badge"></span>
              </div>
              {(props.editButton || props.deleteButton) && (
                <div>
                  {props.editButton && (
                    <span
                      className="icons p-1"
                      onClick={() =>
                        props.navigator(
                          props.id ? item[props.id]._id : item._id,
                        )
                      }
                    >
                      <Pencil size="1" />
                    </span>
                  )}
                  {props.deleteButton && (
                    <span
                      className="icons ml-2 p-1"
                      onClick={() =>
                        props.openModal(
                          props.id ? item[props.id]._id : item._id,
                        )
                      }
                    >
                      <Delete size="1" />
                    </span>
                  )}
                </div>
              )}
            </ListGroupItem>
          ))}
          <Modal centered isOpen={props.modal} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>Delete Group</ModalHeader>
            <ModalBody className="text-center">
              <Alert size="3.5" fill="#F55052" />
              <p className="mt-3 mb-0">
                Are you sure you want to delete the group?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                onClick={props.toggleModal}
                outline
                className="text-dark"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={props.deleteGroup}
                className="ml-3"
              >
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </ListGroup>
      )}

      {props.radObjArr.length === 0 && <h1> </h1>}
    </>
  );
};

export default withRouter(TabList);
