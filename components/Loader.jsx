import SyncLoader from 'react-spinners/SyncLoader';

export const Loader = () => {
  return (
    <SyncLoader
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
      color="#fff777"
    />
  );
};
