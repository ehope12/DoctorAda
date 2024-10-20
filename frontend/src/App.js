// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Forum from './components/Forum';
import PubMedSearch from './components/SearchPopUp';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDS7I6Ny5VdVStwFPMX5pCz4-txLksHuWs",
  authDomain: "doctor-talk-d89cd.firebaseapp.com",
  projectId: "doctor-talk-d89cd",
  storageBucket: "doctor-talk-d89cd.appspot.com",
  messagingSenderId: "450449558044",
  appId: "1:450449558044:web:86f13de23449ffeff6edd9",
  measurementId: "G-JM2BBW7SZC"
})

const [user] = useAuthState;

import Profile from './components/profile'
function App() {
  const [citation, setCitation] = useState('');

  const citeArticle = (article) => {
    const citeText = `${article.title} - ${article.url}`;
    setCitation(citeText);
    alert(`Cited: ${citeText}`);
  };

  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="main-container">
        <div className="forum-container">
          <Forum />
          <PubMedSearch onCiteArticle={citeArticle} />
        </div>
        <div className="search-container">
          {/* Article Results */}
          <div className="article-results">
            {/* Article boxes can be dynamically generated here */}
            <PubMedSearch onCiteArticle={citeArticle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar'; // Import your NavBar component
// import Profile from './pages/Profile'; // Import your Profile component
// import Home from './pages/Home'; // Import other pages/components as needed

// const App = () => (
//     <Router>
//         <div className="App">
//             <NavBar /> {/* This should contain your navigation links */}
//             <Routes>
//                 <Route path="/" element={<Home />} /> {/* Your home page */}
//                 <Route path="/profile" element={<Profile />} /> {/* Your profile page */}
//                 {/* Add more routes here as needed */}
//             </Routes>
//         </div>
//     </Router>
// );

// export default App;
