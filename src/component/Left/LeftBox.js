import '../../assets/css/LeftBox.css';
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useState } from "react";

const LeftBox = ({items, buttonHandler, selectId}) => {
    const [keyword, setKeyword] = useState('');

    return(
        <div className="leftBox">
            <SearchBox onChange={(data) => setKeyword(data)}/>
            <ContactList items={items} keyword={keyword} 
                         buttonHandler={buttonHandler} selectId={selectId} />
        </div>
    );
}

export default LeftBox;