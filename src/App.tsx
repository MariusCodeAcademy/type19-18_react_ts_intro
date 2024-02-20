import Greet from './components/Greet';
import Heading from './components/Heading';

function App() {
  return (
    <div className='container'>
      <h2 className='display-2'>React TS App</h2>
      <Heading title={'Sveiki'} />
      <Greet name='James' amount={500_000_000} favColor='tomato' />
      <Greet name='Mike' amount={10_000_000} />
    </div>
  );
}

export default App;
