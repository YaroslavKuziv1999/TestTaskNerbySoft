import React from 'react';
import AnnoucementList from './announcementsList/AnnoucementList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
        <div>
          <h1 className="display-3">Announcements</h1>
        </div>
        <AnnoucementList />
    </div>
  )
}

export default App;
