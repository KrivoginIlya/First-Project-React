import React from "react";
import Grid from "@material-ui/core/Grid";

import { MessageList, ChatList } from "./components";

export const App = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item={true} xs={3}>
          <ChatList />
        </Grid>
        <Grid item={true} xs={9}>
          <MessageList />
        </Grid>
      </Grid>
    </div>
  );
};
