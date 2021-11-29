import { useState } from "react";
import WriteInformation from "./WriteInformation";

const item = {
    no: 0,
    name: "",
    phoneNumber:"",
    age: "",
    email:"",
    explain:""
}

const AddContact = (props) => {
    const [check, setCheck] = useState(true);

    const okButtonClick = () => {
        props.buttonHandler.plus(item);
        props.buttonHandler.toggle();
        item.name = "";
        item.phoneNumber ="";
        item.age = "";
        item.email = "";
        item.explain = "";
        setCheck(true);
    }

    const onChange = (titleId, data) => {
        item[titleId] = data;
        item.name !== "" && item.phoneNumber !== "" && item.age !== "" && item.email !== "" && item.explain !== "" ? 
        setCheck(false) : setCheck(true);
    }
    
    return(
        <div className="addContact">
            <h1>연락처를 등록하세요</h1>
            <div>
                <WriteInformation title={"이름"} titleId={"name"} onChange={onChange } />
                <WriteInformation title={"전화번호"} titleId={"phoneNumber"} onChange={onChange } />
                <WriteInformation title={"나이"} titleId={"age"} onChange={onChange } />
                <WriteInformation title={"email"} titleId={"email"} onChange={onChange } />
                <WriteInformation title={"설명"} titleId={"explain"} onChange={onChange } />
                <button className="ok" onClick={okButtonClick} disabled={check }>확인</button>
                <button className="cancel" onClick={() => props.buttonHandler.toggle()}>취소</button>
            </div>
        </div>
    );
}

export default AddContact;