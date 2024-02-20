import Person from './Person';

type PersonListProps = {
  list: {
    firstName: string;
    lastName: string;
  }[];
};
export default function PersonList(props: PersonListProps) {
  return (
    <div>
      <h3>PersonList</h3>
      <ul className='list-group'>
        {props.list.map((pObj) => (
          <li key={pObj.firstName} className='list-group-item'>
            <Person item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}
