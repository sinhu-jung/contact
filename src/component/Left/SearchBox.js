const SearchBox = ({onChange}) => {
    return(
        <div className="searchBox">
            <input placeholder="검색어를 입력하세요." className="search" 
                   onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}

export default SearchBox;