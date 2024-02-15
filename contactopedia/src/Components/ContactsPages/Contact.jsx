const Contacts = (props) => {
    return (
      <div className = "row p-md-2 mb-2"
      style={{borderRadius: "20px", border: "1px solid #555"}}>
        <div></div>
        <button className="btn btn-secondary form-control">
          {props.contact.name}
        </button>
      </div>
    );
  };
  export default Contacts;