import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

const ExampleList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="username" />
      <TextField source="website" />
      <TextField source="phone" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);

export default ExampleList;
