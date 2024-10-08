import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const EditContact = () => {
const { store, actions } = useContext(Context);
const navigate = useNavigate();
const contact = store.currentContact;
const [ name, setName ] = useState(contact.name);
const [ phone, setPhone ] = useState(contact.phone);
const [ email, setEmail ] = useState(contact.email);
const [ address, setAddress ] = useState(contact.address);

//SUBMIT HANDLER
const handleSave = () => {
  const dataToSend = {name: name, phone: phone, email: email, address: address}
  actions.editContact(contact, dataToSend)
  navigate("/contacts");}

const handleCancel = () => {navigate("/contacts");}

  return (
    <div className="container align-items-center">
      <form>
        <h1> Edit Contact</h1>
        <div className="row mb-2">
          <label htmlFor="name" className="form-label"> full Name </label>
          <input type="text" name="name" value={name} id="name" className="form-control"  onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="row mb-2">
          <label htmlFor="emailAddress" className="form-label"> Email Address </label>
          <input type="email" name="email" value={email} id="emailAddress" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="row mb-2">
          <label htmlFor="phone" className="form-label"> phone </label>
          <input type="number" name="phone" value={phone} id="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="row mb-2">
          <label htmlFor="address" className="form-label"> Address </label>
          <input type="text" name="address" value={address} id="address" className="form-control" onChange={(e) => setAddress(e.target.value)}/>
        </div>
        {/* BUTTONS */}
        <div className="row mb-2">
          <div className="col">
          <span>
            <button className="btn btn-success me-2" type="button" onClick={handleSave}> Save </button>
            <button className="btn btn-danger" type="button" onClick={handleCancel}> Cancel </button> 
          </span>
          </div>
        </div>
      </form>
    </div>
  );
};
