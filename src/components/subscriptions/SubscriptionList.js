import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  SimpleList,
  Pagination,
  ReferenceField,
} from "react-admin";

const SubscriptionPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

const SubscriptionList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Subscriptions"
      title="Subscriptions"
      pagination={<SubscriptionPagination />}
      {...props}
    >
      {isSmall ? (
        <SimpleList linkType="show" primaryText={(record) => record.planName} />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Plan" source="planName" />
          <ReferenceField
            link="show"
            label="Application"
            source="appId"
            reference="applications"
          >
            <TextField label="Application" source="applicationName" />
          </ReferenceField>
        </Datagrid>
      )}
    </List>
  );
};

export default SubscriptionList;
