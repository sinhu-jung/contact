import Contact from "./Contact";

const ContactList = ({items, keyword, buttonHandler, selectNo}) => {

    return(
        <ul className="items">
            {items.filter(item => item.name.indexOf(keyword) !== -1 || 
                                  item.phoneNumber.indexOf(keyword) !== -1 ||
                                  item.age.indexOf(keyword) !== -1 ||
                                  item.email.indexOf(keyword) !== -1 ||
                                  item.explain.indexOf(keyword) !== -1)
                  .map(item => <Contact 
                                    key={item.no}
                                    no={item.no}
                                    name={item.name}
                                    phoneNumber={item.phoneNumber}
                                    buttonHandler={buttonHandler}
                                    selectNo={selectNo}/>)}
        </ul>
    );
}

export default ContactList;