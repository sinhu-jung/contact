import '../../assets/css/LeftBox.css';
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useState } from "react";

const LeftBox = ({items, buttonHandler, selectNo}) => {
    const [keyword, setKeyword] = useState('');

    return(
        <div className="leftBox">
            <SearchBox onChange={(info) => setKeyword(info)}/>
            <ContactList items={items} keyword={keyword} 
                         buttonHandler={buttonHandler} selectNo={selectNo} />
        </div>
    );
}

export default LeftBox;