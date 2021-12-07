import {useEffect, useState} from "react";
import LeftBox from "./Left/LeftBox.js";
import RightBox from "./Right/RightBox.js";
import AddContact from "./AddContact/AddContact";
import update from 'react-addons-update';
import Service from "../Service.js";
import "../assets/css/Box.css";

const Box = () => {
    const [changeBox, setChangeBox] = useState(true)
    const [items, setItems] = useState([]);
    const [selectId, setSelectId] = useState(null);
    const selectIndex = items.findIndex((item) => item.id === selectId);

    const getAll = async () => {
        try {
            const result =  await Service.getAll()
            setItems(result.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAll();
    }, [])

    const buttonHandler = {
        plus: async (data) => {
            const item = {
                name: data.name,
                phoneNumber: data.phoneNumber,
                age: Number(data.age),
                email: data.email,
                description: data.description
            }

            try {
                const response = await Service.create(item);
                setItems([...items, response.data]);
            } catch(err){
                console.error(err);
            }
        },
        delete: async () => {
            try{
                const response = await Service.delete(selectId)
                if (response.status === 200) 
                    setItems(update(items, {$splice: [[selectIndex, 1]]}));
            }catch(err){
                console.error(err);
            }
        }
    }

    return(
        <div className="box">
            {   
                changeBox ? 
                (
                    <>
                        <LeftBox items={items} setSelectId={setSelectId} selectId={selectId}/>
                        <RightBox selectedItem={items[selectIndex]}/>
                        <button className="plusButton" onClick={() => setChangeBox(false)}>+</button>
                        <button className="minusButton" 
                                disabled={selectIndex >= 0 ? false : true}
                                onClick={buttonHandler.delete}>-</button>
                    </>
                ) : <AddContact buttonHandler={buttonHandler } changeBox={setChangeBox} />
            }
        </div>
    );
}

export default Box;