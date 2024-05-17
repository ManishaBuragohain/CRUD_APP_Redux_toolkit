import React, { useState } from "react";
import Modal from "react-modal";

const AddUserModal = ({ isOpen, closeModal, handleAddUser, handleChange, newUser, errorMessage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-header">
        <h2>Add Task</h2>
        <button className="btn-close" onClick={closeModal}></button>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newUser.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={newUser.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={newUser.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={newUser.status}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={handleAddUser}
          >
            Add User
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </Modal>
  );
};

export default AddUserModal;
