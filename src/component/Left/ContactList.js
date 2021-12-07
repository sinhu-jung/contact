import '../../assets/css/ContactList.css';
import Contact from "./Contact";

const ContactList = ({items, keyword, buttonHandler, selectId}) => {

    const filteredContacts = items.filter(item => {
        return Object.keys(item).map((key) => {
            if(key.id === 'id') return false; // id 제외
            return (item[key]).toString().includes(keyword);
        }).includes(true);
    })

    return(
        <ul className="items">
            {
                filteredContacts.map(item => <Contact 
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    phoneNumber={item.phoneNumber}
                                    buttonHandler={buttonHandler}
                                    selectId={selectId}/>)}
        </ul>
    );
}

export default ContactList;