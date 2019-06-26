import React from 'react';
import Inbox from './Inbox/Inbox';

function AdminLandingPage(){
  return (
    <div>
      <div>
      This is the AdminLandingPage page. It will have the inbox here:
      <Inbox />
      </div>
      <div>
        and a carousel of saved images
      </div>
    </div>
  )
}

export default AdminLandingPage;