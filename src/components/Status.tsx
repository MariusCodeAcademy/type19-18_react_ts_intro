type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

export default function Status(props: StatusProps) {
  console.log('props ===', props);
  let message = '';
  let dynamicClass: string;
  if (props.status === 'error') {
    message = 'Error';
    dynamicClass = 'danger';
  } else if (props.status === 'loading') {
    message = 'Loading';
    dynamicClass = 'info';
  } else {
    message = 'Success';
    dynamicClass = 'success';
  }

  return (
    <div>
      <div className={`alert alert-${dynamicClass}`}>{message}</div>

      {/* {props.status === 'loading' && <div className='alert alert-info'>Loading</div>}
      {props.status === 'error' && <div className='alert alert-danger'>Error</div>}
      {props.status === 'success' && <div className='alert alert-success'>Success</div>} */}
    </div>
  );
}
