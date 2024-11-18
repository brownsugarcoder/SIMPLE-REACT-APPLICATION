import Header from './Header.jsx';
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx';


function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

/* function Footer() {
  return (<h1>Created by Me, of course.</h1>);
} */

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Button />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Card />
      <Footer />
    </>
  );
}

export default App;