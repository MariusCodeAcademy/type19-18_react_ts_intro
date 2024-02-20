import Button from './components/Button';
import Greet from './components/Greet';
import Grid from './components/Grid';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { PersonObj } from './components/PersonObj.type';
import Status from './components/Status';
import LoggedIn from './components/state/LoggedIn';

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

  // function printName(): void {
  //   console.log('Hi My name is James');
  // }

  function sum(x1: number, x2: number): number {
    return +(x1 + x2).toFixed(2);
  }

  return (
    <div className='container'>
      <h2 className='display-2'>React TS App</h2>
      {/* <Heading title={'Sveiki'} /> */}

      <LoggedIn />

      {false && (
        <>
          <Grid>
            {/* heading priima probs size kuri gali buti sveikas skaicius nuo 1 iki 6 imtinai */}
            {/* (extra) jei nepaduotas size tai jis lygus 3 */}
            <Heading size={1}>Dar vienas headingas</Heading>
            <Heading>Default size</Heading>
            <Button
              onClick={(event, id) => {
                console.log('event', event.currentTarget, id);
              }}
              sumuok={sum}
            />
            <Status status='success' />
          </Grid>
          <Person item={perObj} />
          <PersonList list={personArr} />

          <Greet name='James' amount={500_000_000} favColor='tomato' />
          <Greet name='Mike' amount={10_000_000} />
        </>
      )}
    </div>
  );
}

export default App;
