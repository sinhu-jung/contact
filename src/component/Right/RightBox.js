import '../../assets/css/RightBox.css';

const RightBox = ({selectedItem}) => {

    return(
        <div className="rightBox">
        {   
            selectedItem === undefined ?
            <div className="notSelected">선택된 연락처가 없습니다.</div> :
            <>
                <dl>
                    <dt>이름</dt>
                    <dd>{selectedItem.name}</dd>
                </dl>
                <dl>
                    <dt>나이</dt>
                    <dd>{selectedItem.age}</dd>
                </dl>
                <dl>
                    <dt>전화번호</dt>
                    <dd>{selectedItem.phoneNumber}</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>{selectedItem.email}</dd>
                </dl>
                <dl>
                    <dt>설명</dt>
                    <dd>{selectedItem.description}</dd>
                </dl>
            </>
        }
        </div>
    );
}

export default RightBox;