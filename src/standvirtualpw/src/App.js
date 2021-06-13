import { Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { CarroEdit, CarroList, PostCreate} from "./CarrosList";
import { ClienteEdit, ClienteList } from "./ClientesList";
import { FornecedorList, FornecedorEdit, FornecedorCreate } from "./FornecedorsList";
import { MarcaList, MarcaEdit, MarcaCreate } from "./MarcasList";
import {ListadepreferenciaEdit, ListadepreferenciaList, ListadepreferenciaCreate} from "./ListadepreferenciaList";
import { Dashboard } from "./dashboard";
import {CriarCliente} from "./ClientesList";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FavoritoEdit, FavoritosList, FavoritoCreate } from "./FavoritosList";
import { ListaList, ListaCreate, ListaEdit } from "./ListasList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core";



const dataProvider = lb4Provider("http://localhost:3000");


const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="carros" icon={DriveEtaIcon} list={CarroList} create={PostCreate} edit={CarroEdit} />
    <Resource name="clientes" icon={PersonIcon} list={ClienteList} edit={ClienteEdit} create={CriarCliente}/>
    <Resource name="fornecedors" icon={LocalShippingIcon} list={FornecedorList} edit={FornecedorEdit} create={FornecedorCreate}/>
    <Resource name="marcas" icon={EmojiTransportationIcon} list={MarcaList} edit={MarcaEdit} create={MarcaCreate} />
    <Resource name="listadepreferencias" icon={ListIcon} list={ListadepreferenciaList} edit={ListadepreferenciaEdit} create={ListadepreferenciaCreate} />
    <Resource name="favoritos" icon={FavoriteIcon} list={FavoritosList} edit={FavoritoEdit} create={FavoritoCreate} />
    <Resource name="listas" icon={ListIcon} list={ListaList} edit={ListaEdit} create={ListaCreate} />
  </Admin>
);

export default App;