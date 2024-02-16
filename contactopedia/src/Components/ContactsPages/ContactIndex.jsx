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
          id: 1,
          name: "Joe Sanley",
          email: "joe@gmail.com",
          phone: 24587595481,
          isFavorite: true,
        },
        {
          id: 2,
          name: "Mike Dan",
          email: "mike@gmail.com",
          phone: 24587595482,
          isFavorite: false,
        },
        {
          id: 3,
          name: "Ian Elliot",
          email: "ian@gmail.com",
          phone: 24587595483,
          isFavorite: true,
        },
        {
          id: 4,
          name: "Park Chan",
          email: "park@gmail.com",
          phone: 24587595484,
          isFavorite: false,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return{
        contactList: prevState.contactList.concat([newFinalContact]),
      }
    });
    alert("Contact has been added");

  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>

            <div className="row py-3">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
