import React from "react";
import './Styles/Admin.css';

const Admin = () => {
  return (
    <div className='admin-container'>
      <a href="/admin/add-monster">
        <button className='button-admin'>Ajouter un monstre</button>
      </a>
    </div>
  );
};

export default Admin;
