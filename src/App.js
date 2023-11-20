import logo from './logo.svg';
import './App.css';
import avatar from './images/avatar.jpg';
import dog1mg from './images/dog-image-1.jpg';
import dog2mg from './images/dog-image-2.jpg';
import dog3mg from './images/dog-image-3.jpg';

function App() {
  return (
    <div className="App">
      <img src={avatar}/>
      <h2>Samuel Green</h2>
      <h6>Available to walk</h6>
      <p>That sounds great. i'd be happy with that.</p>
      <p>Could you send over some pictures of your dog, please?</p>
      <img src={dog1mg}/>
      <img src={dog2mg}/>
      <img src={dog3mg}/>
      <p>Here are some pictures,she's a happy girl.</p>
      <p>Can you make it?</p>
      <p>She looks so happy!The time we discussed works.How long shall I take her out for?</p>
      <h2>Simple booking</h2>
      <p>Stay in touch with our dog walker's through the chat interfacee. This makes it easy  to discuss arrangements
      and make bookings. Once the walk has been completed you can rate your worker and book again all through 
      the chat.</p>
    </div>
  );
}

export default App;
