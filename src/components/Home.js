import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, updateTaskStatus } from "../store/userSlice";
import "./Home.css";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";

const Home = () => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editIsModalOpen, setEditIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    title: "",
    description: "",

    dueDate: "",
    status: "",
  });
  const [editUser, setEditUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const openAddModal = () => {
    setAddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
    resetNewUser();
  };

  const openEditModal = (user) => {
    setEditUser(user);
    setEditIsModalOpen(true);
  };

  const closeEditModal = () => {
    setEditUser(null);
    setEditIsModalOpen(false);
  };

  const resetNewUser = () => {
    setNewUser({
      title: "",
      description: "",
      dueDate: "",
      status: "",
    });
    setErrorMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (!newUser.title || !newUser.description || !newUser.dueDate || !newUser.status) {
      setErrorMessage("Please add all the required fields.");
      return;
    }

    const maxId = Math.max(...users.map((user) => user.id), 0);
    const id = maxId + 1;
    const userWithId = { ...newUser, id };
    dispatch(addTask(userWithId));
    closeAddModal();
  };

  const handleDelete = (user_id) => {
    dispatch(deleteTask(user_id));
  };

  const handleEditUser = () => {
    dispatch(updateTaskStatus(editUser));
    closeEditModal();
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-2">
        <button className="btn btn-success" onClick={openAddModal}>
          Add Task
        </button>
      </div>
      <table className="table table-container">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>{user.dueDate}</td>
              <td>{user.status}</td>
              <td className="edit-action" onClick={() => openEditModal(user)}>
                Edit
              </td>
              <td className="delete-action" onClick={() => handleDelete(user.id)}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddUserModal
        isOpen={addModalIsOpen}
        closeModal={closeAddModal}
        handleAddUser={handleAddUser}
        handleChange={handleChange}
        newUser={newUser}
        errorMessage={errorMessage}
      />

      <EditUserModal
        isOpen={editIsModalOpen}
        closeModal={closeEditModal}
        handleEditUser={handleEditUser}
        handleEditInputChange={handleEditInputChange}
        editUser={editUser}
      />
    </div>
  );
};

export default Home;
