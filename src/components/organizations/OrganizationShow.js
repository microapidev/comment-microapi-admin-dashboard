import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const OrganizationShow = (props) => (
  <Show label="Show" {...props}>
    <SimpleShowLayout>
      <TextField label="ID" source="organizationId" />
      <TextField source="organizationName" />
    </SimpleShowLayout>
  </Show>
);

export default OrganizationShow;
