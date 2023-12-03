const Filter = ({value, onChange}) =>{
    return(
        <div>
        filter shown with:
        <input
          type="search"
          value={value}
          onChange={onChange}
        ></input>
      </div>
    );
};

export default Filter;