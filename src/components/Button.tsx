type ButtonProps = {
  onClick: () => void;
  sumuok: (a: number, b: number) => number;
};

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className='btn btn-outline-info'>
      Click me
    </button>
  );
}
