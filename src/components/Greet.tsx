type GreetProps = {
  name: string;
  amount: number;
  favColor?: string;
};
//
function Greet(props: GreetProps) {
  console.log('props ===', props);
  return (
    <div>
      <h3 className='alert alert-secondary'>
        Hello there {props.name}, you have won {props.amount} dollars <br />
        {props.favColor && (
          <span className='fw-normal'>And your favorite color is {props.favColor}</span>
        )}
      </h3>
    </div>
  );
}

export default Greet;
