type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>, curId: number) => void;
  sumuok: (a: number, b: number) => number;
};

export default function Button(props: ButtonProps) {
  const id = 5;
  return (
    <button onClick={(event) => props.onClick(event, id)} className='btn btn-outline-info'>
      Click me
    </button>
  );
}
