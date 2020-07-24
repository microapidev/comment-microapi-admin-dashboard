import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList } from "react-admin";

const OrganizationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List label="Admins" {...props}>
      {isSmall ? (
        <SimpleList
          linkType="show"
          primaryText={(record) => record.organizationName}
          secondaryText={(record) => `${record.organizationId}`}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="organizationId" />
          <TextField source="organizationName" />
        </Datagrid>
      )}
    </List>
  );
};

export default OrganizationList;
