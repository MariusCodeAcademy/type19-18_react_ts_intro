import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { PersonObj } from './components/PersonObj.type';
import Status from './components/Status';

function App() {
  const perObj: PersonObj = {
    id: 50,
    firstName: 'Mike',
    lastName: 'Dow',
  };
  const personArr: PersonObj[] = [
    {
      id: 1,
      firstName: 'James',
      lastName: 'Bond',
    },
    {
      id: 2,
      firstName: 'Bruce',
      lastName: 'Wayne',
    },
    {
      id: 3,
      firstName: 'Clark',
      lastName: 'Kent',
    },
  ];
  return (
    <div className='container'>
      <h2 className='display-2'>React TS App</h2>
      <Status status='success' />
      <Status status='loading' />
      <Status status='error' />
      {false && (
        <>
          <Person item={perObj} />
          <PersonList list={personArr} />
          <Heading title={'Sveiki'} />
          <Greet name='James' amount={500_000_000} favColor='tomato' />
          <Greet name='Mike' amount={10_000_000} />
        </>
      )}
    </div>
  );
}

export default App;
