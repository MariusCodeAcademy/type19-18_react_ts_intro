import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { PersonObj } from './components/PersonObj.type';

function App() {
  const perObj: PersonObj = {
    firstName: 'Mike',
    lastName: 'Dow',
  };
  const personArr: PersonObj[] = [
    {
      firstName: 'James',
      lastName: 'Bond',
    },
    {
      firstName: 'Bruce',
      lastName: 'Wayne',
    },
    {
      firstName: 'Clark',
      lastName: 'Kent',
    },
  ];
  return (
    <div className='container'>
      <h2 className='display-2'>React TS App</h2>
      <Person item={perObj} />
      <PersonList list={personArr} />
      <Heading title={'Sveiki'} />
      <Greet name='James' amount={500_000_000} favColor='tomato' />
      <Greet name='Mike' amount={10_000_000} />
    </div>
  );
}

export default App;
