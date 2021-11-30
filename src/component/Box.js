import {useEffect, useState} from "react";
import LeftBox from "./Left/LeftBox.js";
import RightBox from "./Right/RightBox.js";
import AddContact from "./AddContact/AddContact";
import update from 'react-addons-update';
import Service from "../Service.js";
import "../assets/css/Box.css";

const Box = () => {
    const [addContactButton, setAddContactButton] = useState(true)
    const [items, setItems] = useState([]);
    const [selectId, setSelectId] = useState(null);
    const selectIndex = items.findIndex((item) => item.id === selectId);

    useEffect(() => {
        Service.getAll()
               .then(res => setItems(res.data))
               .catch(err => console.log('getAll error: ', err));
    }, [])

    const buttonHandler = {
        toggle: function(){
            setAddContactButton(true);
        },
        select: function(selectId){
            setSelectId(selectId);
        },
        plus: function(data){
            const item = {
                name: data.name,
                phoneNumber: data.phoneNumber,
                age: parseInt(data.age),
                email: data.email,
                description: data.description
            }

            Service.create(item)
                   .then(res => setItems([...items, res.data]))
                   .catch(err => console.log('getAll error: ', err));
        },
        delete: function(){
            Service.delete(selectId).then(res => setItems(update(items, {$splice: [[selectIndex, 1]]})))
                   .catch(err => console.log('getAll error: ', err));
        }
    }

    return(
        <div className="box">
            {   
                addContactButton ? 
                (
                    <>
                        <LeftBox items={items} buttonHandler={buttonHandler} selectId={selectId}/>
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