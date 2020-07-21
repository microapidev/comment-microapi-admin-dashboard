import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./components/dashboard/Dashboard";
import authProvider from "./services/authProvider";
import adminProvider from "./services/adminProvider";
import msadmins from "./components/msadmins";
import organizationsComponents from "./components/organizations";

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={adminProvider}
    >
      <Resource name="msadmins" {...msadmins} />
      <Resource name="msadmins/organizations" {...organizationsComponents} />
    </Admin>
  );
}

export default App;
