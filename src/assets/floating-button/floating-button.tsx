import * as React from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from 'reactstrap';
import './floating-button.scss';
import {
    Plus,
    Close,
    Profile,
    Running,
    Cycling,
    Swimming,
} from '../icon-fonts/icons';
import { NavLink } from 'react-router-dom';

export default class FloatingButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            DropdownOpen: false,
            modal: false,
            size: props.string,
            selected: true,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
    }

    toggleModal = () => {
        this.setState((prevState: any) => ({
            modal: !prevState.modal,
        }));
    };

    toggleFloatingButton = () => {
        this.setState((prevState: any) => ({
            DropdownOpen: !prevState.DropdownOpen,
        }));
    };
    selectFilter = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <>
                <Modal
                    size="250"
                    isOpen={this.state.modal}
                    toggle={this.toggleModal}
                    className={this.props.className}
                >
                    <div className="text-right px-3 pt-2">
                        <Button onClick={this.toggleModal} close />
                    </div>
                    <ModalBody className="pt-0">
                        <div className="f-14 text-black mb-3">
                            Filter By Activity
                        </div>
                        <ul className="list-inline d-flex align-items-center">
                            <li
                                className={
                                    this.state.active
                                        ? 'text-primary list-inline-item cursor-pointer mr-3'
                                        : 'list-inline-item cursor-pointer mr-3'
                                }
                                onClick={this.selectFilter}
                            >
                                <span className="all-filter">All</span>
                            </li>
                            <li
                                className={
                                    this.state.active
                                        ? 'text-primary list-inline-item cursor-pointer mr-3'
                                        : 'list-inline-item cursor-pointer mr-3'
                                }
                                onClick={this.selectFilter}
                            >
                                <Running size="3" />
                            </li>
                            <li
                                className={
                                    this.state.active
                                        ? 'text-primary list-inline-item cursor-pointer mr-3'
                                        : 'list-inline-item cursor-pointer mr-3'
                                }
                                onClick={this.selectFilter}
                            >
                                <Cycling size="3" />
                            </li>
                            <li
                                className={
                                    this.state.active
                                        ? 'text-primary list-inline-item cursor-pointer mr-3'
                                        : 'list-inline-item cursor-pointer mr-3'
                                }
                                onClick={this.selectFilter}
                            >
                                <Swimming size="3" />
                            </li>
                        </ul>
                    </ModalBody>
                </Modal>
                <Dropdown
                    isOpen={this.state.DropdownOpen}
                    toggle={this.toggleFloatingButton}
                    className="floating-button-wrapper"
                >
                    <DropdownToggle
                        className="floating-button ripple"
                        tag={'span'}
                    >
                        {this.state.DropdownOpen ? <Close /> : <Plus />}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="div">
                            <div
                                className="nav-link p-0"
                                onClick={this.toggleModal}
                            >
                                <span className="f-16"> Filter</span>
                            </div>
                        </DropdownItem>

                        <DropdownItem divider />
                        <DropdownItem tag="div">
                            <NavLink
                                to="/add-plan"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16"> Add Plan</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem tag="div">
                            <NavLink
                                to="/create-group"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16"> Create Group</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink
                                to="/create-group"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16"> Add Members</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink
                                to="/create-group"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16">Remove Members</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink
                                to="/create-group"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16">Rename Group</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink
                                to="/create-group"
                                className="nav-link p-0"
                                activeClassName="active"
                            >
                                <span className="f-16">Delete Group</span>
                            </NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }
}
