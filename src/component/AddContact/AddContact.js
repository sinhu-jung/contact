import '../../assets/css/AddContact.css';
import { useState } from "react";
import WriteInformation from "./WriteInformation";

const info = {
    name: "",
    phoneNumber:"",
    age: null,
    email:"",
    description:""
}

const title = {
    "이름" : "name",
    "전화번호" : "phoneNumber",
    "나이" : "age",
    "email" : "email",
    "설명" : "description"
}

const AddContact = (props) => {
    const [item, setItem] = useState(info);

    const okButtonClick = () => {
        props.buttonHandler.plus(item);
        props.changeBox(true);
        setItem(info)
    }

    const onChange = (titleId, data) => {
        setItem({...item, [titleId] : data})
    }
    
    return(
        <div className="addContact">
            <h1>연락처를 등록하세요</h1>
            <div>
                {
                    Object.keys(title).map((key, index) => <WriteInformation key={index} title={key} titleId={title[key]} onChange={onChange } />)
                }
                <button className="ok" onClick={okButtonClick} disabled={item.name && 
                                                                         item.phoneNumber && 
                                                                         item.age && 
                                                                         item.email && 
                                                                         item.description ? false : true }>확인</button>
                <button className="cancel" onClick={() => props.changeBox(true)}>취소</button>
            </div>
        </div>
    );
}

export default AddContact;