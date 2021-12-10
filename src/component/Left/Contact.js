import '../../assets/css/Contact.css';

const Contact = ({id, name, phoneNumber, setSelectId, selectId}) => {
    
    return(
        <li className={id === selectId ? "itemSelected" : "item"}>
            <button className={id === selectId ? "contactSelect" : "contactNotSelect"} 
                               onFocus={() => setSelectId(id)}>
                <div style={{padding:'5px'}}>{name}</div>
                <div style={{padding:'5px'}}>{phoneNumber}</div>
            </button>
        </li>
    );
}

export default Contact;