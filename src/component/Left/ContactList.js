import '../../assets/css/ContactList.css';
import Contact from "./Contact";

const ContactList = ({items, keyword, buttonHandler, selectId}) => {

    return(
        <ul className="items">
            {items.filter(item => item.name.indexOf(keyword) !== -1 || 
                                  item.phoneNumber.indexOf(keyword) !== -1 ||
                                  item.age.indexOf(keyword) !== -1 ||
                                  item.email.indexOf(keyword) !== -1 ||
                                  item.description.indexOf(keyword) !== -1 || '')
                  .map(item => <Contact 
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