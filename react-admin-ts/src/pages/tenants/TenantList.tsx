import { BooleanField, Datagrid, List, TextField } from 'react-admin';

export const TenantList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="tenancyName" />
      <TextField source="name" />
      <BooleanField source="isActive" />
    </Datagrid>
  </List>
);
