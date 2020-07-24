import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  SimpleList,
} from "react-admin";

const useStyles = makeStyles({
  root: {
    color: "#3f51b5",
  },
});

const OrganizationShow = (props) => {
  const classes = useStyles();

  return (
    <Show label="Show" {...props}>
      <TabbedShowLayout>
        <Tab label="details">
          <TextField label="ID" source="organizationId" />
          <TextField source="organizationName" />
        </Tab>
        <Tab label="applications">
          <ReferenceManyField
            link="show"
            label=""
            reference="Applications"
            target="appId"
          >
            <SimpleList
              className={classes.root}
              linkType="show"
              primaryText={(record) => record.applicationName}
            ></SimpleList>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default OrganizationShow;
