import BusinessIcon from '@mui/icons-material/Business';
import UserIcon from '@mui/icons-material/Group';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';

import { Dashboard } from './Dashboard';
import { PostCreate } from './PostCreate';
import { PostEdit } from './PostEdit';
import { PostList } from './PostList';
import authProvider from './auth/authProvider';
import { dataProvider } from './dataProvider';
import restfulApiDataProvider from './dataProviders/restfulApiDataProvider';
import abpConsts from './lib/abpConsts';
import { RoleList } from './pages/roles/RoleList';
import { TenantList } from './pages/tenants/TenantList';
import { UserList } from './pages/users/UserList';

const apiUrl = `${abpConsts.remoteServiceBaseUrl}/api`;

export const App = () => (
  // <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
  //   {/* <Resource name="posts" list={ListGuesser} /> */}
  //   <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  //   {/* <Resource name="users" list={ListGuesser} /> */}
  //   <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  // </Admin>
  <Admin dataProvider={restfulApiDataProvider(apiUrl)} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="tenants" list={TenantList} icon={BusinessIcon} />
    <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
    <Resource name="roles" list={RoleList} icon={TheaterComedyIcon} />
  </Admin>
);
