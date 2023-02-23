import "./Modal.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
const Modal = ({setShowModal}) => {
  const handleCloseModal=()=>{
    setShowModal(false)
  }
  return (
    <div className="modal-container">
      <div className="modal-background"></div>
      <div className="modal">
        <div className="modal-close-btn">
        <AiOutlineCloseCircle style={{color:"#aa4b6b" , fontSize:"25px"}} onClick={handleCloseModal}/>
        </div>
        <h3> کاربر گرامی از حذف خود مطمن هستدید ؟ </h3>
        <div className="modal-btn">
            <button>بله حذف میکنم</button>
            <button onClick={handleCloseModal}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
