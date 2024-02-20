import Person from './Person';
import { PersonObj } from './PersonObj.type';

type PersonListProps = {
  list: PersonObj[];
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
