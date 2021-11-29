import {useState} from "react";
import LeftBox from "./Left/LeftBox.js";
import RightBox from "./Right/RightBox.js";
import AddContact from "./AddContact/AddContact";
import update from 'react-addons-update';

const Box = () => {
    const [addContactButton, setAddContactButton] = useState(true)
    const [items, setItems] = useState([]);
    const [selectNo, setSelectNo] = useState(null);
    const selectIndex = items.findIndex((item) => item.no === selectNo);

    const buttonHandler = {
        toggle: function(){
            setAddContactButton(true);
        },
        select: function(selectNo){
            setSelectNo(selectNo);
        },
        plus: function(data){
            const item = {
                no: data.no++,
                name: data.name,
                phoneNumber: data.phoneNumber,
                age: data.age,
                email: data.email,
                explain: data.explain
            }
            setItems([...items, item]);
        },
        delete: function(){
            setItems(update(items, {$splice: [[selectIndex, 1]]}));
        }
    }

    return(
        <div className="box">
            {   
                addContactButton ? 
                (
                    <>
                        <LeftBox items={items} buttonHandler={buttonHandler} selectNo={selectNo}/>
                        <RightBox clickItem={items[selectIndex]}/>
                        <button className="plusButton" onClick={() => setAddContactButton(false)}>+</button>
                        <button className="minusButton" 
                                disabled={selectIndex >= 0 ? false : true}
                                onClick={buttonHandler.delete}>-</button>
                    </>
                ) : <AddContact buttonHandler={buttonHandler } />
            }
        </div>
    );
}

export default Box;