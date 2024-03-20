import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useRecordContext } from 'react-admin';

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  //return <a href={`http://${record[source]}`}>{record[source]}</a>;
  return (
    <Link href={record[source]} sx={{ textDecoration: 'none' }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  );
};

export default MyUrlField;
