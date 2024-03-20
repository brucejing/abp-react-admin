import { List, Datagrid, TextField, ReferenceField, ReferenceInput, TextInput } from 'react-admin';

const postFilters = [
  <TextInput key="searchQuery" source="q" label="Search" alwaysOn />,
  <ReferenceInput key="searchUser" source="userId" label="User" reference="users" />
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      {/* <TextField source="body" /> */}
    </Datagrid>
  </List>
);
