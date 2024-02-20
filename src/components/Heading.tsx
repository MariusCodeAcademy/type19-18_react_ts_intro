type HeadingProps = {
  children: string;
};

export default function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3 className='fs-3'>{props.children}</h3>;
}
