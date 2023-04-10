import AppContext from "./AppContext";
import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { BlocksCollection } from "../api/blocks";
import { SlidesCollection } from "../api/slides";

const AppProvider = (props) => {
  const blocks = useTracker(() => BlocksCollection.find({}).fetch());
  const slides = useTracker(() => SlidesCollection.find({}).fetch());

  return (
    <AppContext.Provider
      value={{
        ...props,
        blocks,
        slides,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
