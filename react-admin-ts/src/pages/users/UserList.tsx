import { Theme, useMediaQuery } from '@mui/material';
import { BooleanField, Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin';

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.userName}
          tertiaryText={(record) => record.emailAddress}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="userName" />
          <TextField source="fullName" />
          <EmailField source="emailAddress" />
          <BooleanField source="isActive" />
        </Datagrid>
      )}
    </List>
  );
};
