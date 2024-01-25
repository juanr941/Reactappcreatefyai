import React from 'react';
import './App.css'
// import Header from './components/header';
import Message from './components/message';
import CreateFys from './components/createfys';
import Footer from './components/footer';


//Single webpage application

function App() {

  return (
<div className="App">


<CreateFys/>
<Message/>
{/* <Footer/> */}
</div>

  );
};

export default App;


