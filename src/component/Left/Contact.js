const Contact = ({no, name, phoneNumber, buttonHandler, selectNo}) => {
    
    return(
        <li className={no === selectNo ? "itemSelected" : "item"}>
            <button className={no === selectNo ? "contactSelect" : "contactNotSelect"} 
                               onClick={() => buttonHandler.select(no)}>
                <div style={{padding:'5px'}}>{name}</div>
                <div style={{padding:'5px'}}>{phoneNumber}</div>
            </button>
        </li>
    );
}

export default Contact;