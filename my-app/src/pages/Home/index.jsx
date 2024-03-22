import React from 'react'
import Banner from '../../components/Banner';
import Feature from '../../components/Features';
import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import './HomeStyle.scss'


function Home() {
  return (

    <div className='homeContainer'>
      <Banner />
      <section className='Features'>
      <Feature
          src={iconChat}
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          src={iconMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          src={iconSecurity}
          alt="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
        </section>
    </div>
  );
};

export default Home;