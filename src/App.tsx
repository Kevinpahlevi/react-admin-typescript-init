import "./App.css";
// @ts-ignore
import { Admin, Resource, DataProvider } from "react-admin";
import Dashboard from "./Pages/Dashboard";
import dataProviders from "./Provider/dataProvider";
import { createBrowserHistory as createHistory } from "history";
import Login from "./Pages/Login";
import authProviders from "./Provider/authProvider";
import ExampleResource from "./Pages/ExampleResource";
import PeopleIcon from "@material-ui/icons/People";
const history = createHistory();

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProviders}
      history={history}
      loginPage={Login}
      authProvider={authProviders}
    >
      <Resource
        name="users"
        options={{ label: "Example" }}
        list={ExampleResource}
        icon={PeopleIcon}
      />
    </Admin>
  );
}

export default App;
