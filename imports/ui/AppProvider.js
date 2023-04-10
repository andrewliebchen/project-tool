import AppContext from "./AppContext";
import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { BlocksCollection } from "../api/blocks";
import { SlidesCollection } from "../api/slides";
import { TodosCollection } from "../api/todos";

const AppProvider = (props) => {
  const blocks = useTracker(() => BlocksCollection.find({}).fetch());
  const slides = useTracker(() => SlidesCollection.find({}).fetch());
  const todos = useTracker(() => TodosCollection.find({}).fetch());

  return (
    <AppContext.Provider
      value={{
        ...props,
        blocks,
        slides,
        todos,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
