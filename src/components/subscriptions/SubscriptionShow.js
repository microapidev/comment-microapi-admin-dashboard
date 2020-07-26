import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const SubscriptionShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const SubscriptionShow = (props) => (
  <Show label="Show" title="" actions={<SubscriptionShowActions />} {...props}>
    <SimpleShowLayout>
      <TextField label="Name" source="applicationName" />
      <ReferenceField
        link="show"
        label="Application"
        source="appId"
        reference="applications"
      >
        <TextField label="Application" source="applicationName" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export default SubscriptionShow;
