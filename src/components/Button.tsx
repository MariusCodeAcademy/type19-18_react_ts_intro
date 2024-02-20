type ButtonProps = {
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className='btn btn-outline-info'>
      Click me
    </button>
  );
}
