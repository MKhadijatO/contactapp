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
        <div>
          <div>
            <div>
              <AddRandomContact />
            </div>
            <div>
              <RemoveAllContacts />
            </div>
            <div>
              <AddContact />
            </div>
            <div>
              <FavoriteContacts />
            </div>
            <div>
              <GeneralContacts />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
