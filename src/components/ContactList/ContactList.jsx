import Contact from "../Contact/Contact";
import "./ContactList.css"

const ContactList = ({setShowModal}) => {
    return ( 



        <div className="container">
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>
            <Contact setShowModal={setShowModal}/>

        </div>
    );
}
 
export default ContactList;