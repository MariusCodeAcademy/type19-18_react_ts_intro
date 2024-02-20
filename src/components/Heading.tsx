type HeadingProps = {
  children: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(props: HeadingProps) {
  console.log('props ===', props);
  return <h3 className={`fs-${props.size || 3}`}>{props.children}</h3>;
}
