import UserIcon from '@mui/icons-material/Group';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { UserList } from './UserList';
import { PostList } from './PostList';
import { PostEdit } from './PostEdit';
import { PostCreate } from './PostCreate';
import { Dashboard } from './Dashboard';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);
