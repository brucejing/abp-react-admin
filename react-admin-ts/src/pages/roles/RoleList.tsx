import { Datagrid, List, TextField } from 'react-admin';

export const RoleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="displayName" />
      <TextField source="normalizedName" />
      <TextField source="description" />
      <TextField source="grantedPermissions" />
    </Datagrid>
  </List>
);
