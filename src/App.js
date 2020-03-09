import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './test.css';
import './style.css';

import Header from './components/Header';
// import NavBar from './components/NavBar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div>
      <Header />
      {/* <NavBar />
      <MainContent />
    <Footer /> */}
      <div className="contacts">
        <ContactCard
          contact ={{
            imgURL:"https://via.placeholder.com/111",
            name: "Cat number 1",
            phone: "1111",
            email: "111@xxx.com",
          }}
        />
        <ContactCard
          contact ={{
            imgURL:"https://via.placeholder.com/222",
            name: "Cat number 2",
            phone: "2222",
            email: "222@xxx.com",
          }}
        />
        <ContactCard
          contact ={{
            imgURL:"https://via.placeholder.com/333",
            name: "Cat number 3",
            phone: "3333",
            email: "333@xxx.com",
          }}
        />
        <ContactCard
          contact ={{
            imgURL:"https://via.placeholder.com/444",
            name: "Cat number 4",
            phone: "4444",
            email: "444@xxx.com",
          }}
        />

      </div>
    </div>
  );
}


export default App;
