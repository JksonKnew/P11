import React from 'react'
import Banner from '../../components/Banner';
import Feature from '../../components/Features';

import './HomeStyle.css'


function Home() {
  return (

    <div>
      <Banner />
      <section className='Features'>
      <Feature
          src="src/assets/img/icon-chat.png"
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          src="src/assets/img/icon-chat.png"
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          src="src/assets/img/icon-chat.png"
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        </section>
    </div>
  );
};

export default Home;