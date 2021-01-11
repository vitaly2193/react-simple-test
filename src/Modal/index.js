import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    toggleModal = () => {
        this.setState({isOpen: ! this.state.isOpen});
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.toggleModal}>Open Modal</button>
                {this.state.isOpen &&
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Title</h1>
                            <p>Text</p>
                            <button className="modal-close" onClick={this.toggleModal}>&#10005;</button>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}
