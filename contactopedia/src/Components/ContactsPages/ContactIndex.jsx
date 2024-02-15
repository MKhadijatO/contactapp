import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
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
            <div className="row py-2">
              <AddContact/>
            </div>
            <div className="row py-2">
              <FavoriteContacts/>
            </div>
            <div className="row py-2">
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
