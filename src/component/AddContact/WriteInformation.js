import '../../assets/css/WriteInformation.css';

const WriteInformation = ({title, titleId, onChange}) => {

    return(
        <div className="writeInformation">
            <label className="label">{title}</label>
            <input className="infoInpput" onChange={(e) => onChange(titleId, e.target.value)} />
        </div>
    );
}

export default WriteInformation;