import { PersonObj } from './PersonObj.type';

type PersonProps = {
  item: PersonObj;
};
// Person componentas
export default function Person({ item }: PersonProps) {
  return (
    <div>
      <div className='alert alert-danger text-center fs-3'>
        {item.firstName} {item.lastName}
      </div>
    </div>
  );
}

// priima 2 props, firstName ir lastName abu stringai

// jsx atvaizduojam su siek tiek stiliaus varda ir pavarde

// importuojam i App.tsx

// (2varijantas) priima objekta kuris turi viduje 2 savybes firstName ir lastName abu stringai
