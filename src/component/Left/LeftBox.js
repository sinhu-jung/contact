import '../../assets/css/LeftBox.css';
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { useState } from "react";

const LeftBox = ({items, setSelectId, selectId}) => {
    const [keyword, setKeyword] = useState('');

    return(
        <div className="leftBox">
            <SearchBox onChange={(data) => setKeyword(data)}/>
            <ContactList items={items} keyword={keyword} 
                         setSelectId={setSelectId} selectId={selectId} />
        </div>
    );
}

export default LeftBox;