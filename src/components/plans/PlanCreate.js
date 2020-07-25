import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  required,
} from "react-admin";

const PlanCreate = (props) => {
  return (
    <Create label="Create" title="Create a Plan" {...props}>
      <SimpleForm redirect="show">
        <TextInput label="Name" source="name" validate={[required()]} />
        <BooleanInput
          label="Logging"
          source="logging"
          validate={[required()]}
        />
        <NumberInput
          label="Maximum Log Retention Period (Days)"
          source="maxLogRetentionPeriod"
          validate={[required()]}
        />
        <SelectInput
          source="periodWeight"
          validate={[required()]}
          choices={[
            { id: 1, name: "Monthly" },
            { id: 3, name: "Quarterly" },
            { id: 12, name: "Yearly" },
          ]}
        />
        <NumberInput
          label="Maximum requests per day"
          source="maxRequestPerDay"
          validate={[required()]}
        />
        <NumberInput
          label="Maximum requests per minute"
          source="maxRequestPerMin"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};

export default PlanCreate;
