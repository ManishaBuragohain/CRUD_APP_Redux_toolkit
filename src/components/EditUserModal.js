// EditUserModal.js
import React from "react";
import Modal from "react-modal";

const EditUserModal = ({ isOpen, closeModal, handleEditUser, handleEditInputChange, editUser }) => {
  
  if (!editUser) {
    return null; 
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    //   style={customStyles}
    >
      <div className="modal-header">
        <h2>Edit Task</h2>
        <button className="btn-close" onClick={closeModal}></button>
      </div>
      <form onSubmit={handleEditUser}>
        <div className="mb-3">
          <label htmlFor="editTitle" className="form-label label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="editTitle"
            name="title"
            value={editUser.title}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editDescription" className="form-label label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="editDescription"
            name="description"
            value={editUser.description}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editDueDate" className="form-label label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="editDueDate"
            name="dueDate"
            value={editUser.dueDate}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editStatus" className="form-label label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="editStatus"
            name="status"
            value={editUser.status}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="d-flex">
          <button type="submit" className="btn btn-success mx-2">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditUserModal;
