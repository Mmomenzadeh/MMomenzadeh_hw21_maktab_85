import "./Contact.css";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Contact = ({setShowModal}) => {
  const handleDelete = (ContactId) => {
    setShowModal(true);
  };

  return (
    <>
       <div className="card">
          <div className="card-header">
            <p>name</p>
            <div className="icons">
              <FaTrashAlt  className="icon" onClick={()=>handleDelete()} />
              <FiEdit className="icon" />
            </div>
          </div>
          <div className="card-body">
            <p>اعضایی خانواده</p>
            <p>email@gmail.com</p>
            <p>09178166087</p>
          </div>
        </div>
    </>
  );
};

export default Contact;
