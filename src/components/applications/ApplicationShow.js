import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const ApplicationShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const ApplicationShow = (props) => (
  <Show label="Show" title="" actions={<ApplicationShowActions />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Name" source="applicationName" />
      <TextField label="Organization ID" source="orgId" />
      <TextField label="Organization Name" source="organizationName" />
    </SimpleShowLayout>
  </Show>
);

export default ApplicationShow;
