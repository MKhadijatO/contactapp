import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";
import Footer from "../Layout/Footer";

//class based components are used for state
class ContactIndex extends React.Component {
  //constructor are used to add state
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: "Joe",
          email: "joe@gmail.com",
          phone: 24587595481,
          isFavorite: true
        },
        {
          id: "Mike",
          email: "mike@gmail.com",
          phone: 24587595482,
          isFavorite: false
        },
        {
          id: "Ian",
          email: "ian@gmail.com",
          phone: 24587595483,
          isFavorite: true
        },
        {
          id: "Park",
          email: "park@gmail.com",
          phone: 24587595484,
          isFavorite: false
        }
      ]
      
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style= {{minHeight: "85vh"}} >
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact/>
            </div>
            <div className="col-4">
              <RemoveAllContacts/>
            </div>
            <div className="row py-3">
              <AddContact/>
            </div>
            <div className="row py-3">
              <FavoriteContacts/>
            </div>
            <div className="row py-3">
              <GeneralContacts/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ContactIndex;
