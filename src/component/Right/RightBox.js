import '../../assets/css/RightBox.css';

const RightBox = ({clickItem}) => {

    return(
        <div className="rightBox">
        {   
            clickItem === undefined ?
            <div className="notSelected">선택된 연락처가 없습니다.</div> :
            <>
                <dl>
                    <dt>이름</dt>
                    <dd>{clickItem.name}</dd>
                </dl>
                <dl>
                    <dt>나이</dt>
                    <dd>{clickItem.age}</dd>
                </dl>
                <dl>
                    <dt>전화번호</dt>
                    <dd>{clickItem.phoneNumber}</dd>
                </dl>
                <dl>
                    <dt>Email</dt>
                    <dd>{clickItem.email}</dd>
                </dl>
                <dl>
                    <dt>설명</dt>
                    <dd>{clickItem.description}</dd>
                </dl>
            </>
        }
        </div>
    );
}

export default RightBox;