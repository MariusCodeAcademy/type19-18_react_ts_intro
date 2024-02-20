type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

export default function Status(props: StatusProps) {
  console.log('props ===', props);
  return (
    <div>
      {/* <div className='alert alert-'clase priklausomai nuo status''>statusas</div> */}

      <div className='alert alert-info'>Loading</div>
      <div className='alert alert-danger'>Error</div>
      <div className='alert alert-success'>Success</div>
    </div>
  );
}
