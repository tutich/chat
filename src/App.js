import logo from './logo.svg';
import './App.css';
import avatar from './images/avatar.jpg';
import dog1mg from './images/dog-image-1.jpg';
import dog2mg from './images/dog-image-2.jpg';
import dog3mg from './images/dog-image-3.jpg';

function App() {
  return (
    <div className="App">
      <div className="phone">
        <div className='header'>
          <div class="desc">
            <div className='chevron'></div>
            <div className="avatr">
              <img src={avatar}/>
            </div>
            <div className="content">
              <div className="name">
                <h2>Samuel Green</h2>
              </div>
              <div className="status">
                <h6>Available to walk</h6>
              </div>
            </div>
            <div className='dots'></div>
          </div>
        </div>

        <div className="message">
          <p className='text-reply'>That sounds great. i'd be happy with that.</p>
          <p className='text-reply'>Could you send over some pictures of your dog, please?</p>
          <div className="pics">
            <img src={dog1mg}/>
            <img src={dog2mg}/>
            <img src={dog3mg}/>
          </div>
          <p className='text-user'>Here are some pictures,she's a happy girl.</p>
          <p className='test-user1'>Can you make it?</p>
          <p className='text-reply'>She looks so happy!The time we discussed works.How long shall I take her out for?</p>
          <div className='offer'>
            <div></div>
            <p>30 minute walk</p>
            <span>$29</span>
          </div>
          <div className='offer'>
            <div></div>
            <p>1 hour walk</p>
            <span>$49</span>
          </div>
          <form action='#'>
            <input type='text' placeholder='Type a message...' />
            <div>></div>
          </form>
        </div>
      </div>
      <h2>Simple booking</h2>
      <p>Stay in touch with our dog walker's through the chat
         interfacee. This makes it easy  to discuss arrangements and
         make bookings. Once the walk has been completed you can
         rate your worker and book again all through the chat.
        </p>
    </div>
  );
}

export default App;
