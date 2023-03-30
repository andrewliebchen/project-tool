import React from "react";
import { BlocksCollection } from "../api/blocks";
import { useTracker } from "meteor/react-meteor-data";

export const App = () => {
  const blocks = useTracker(() => BlocksCollection.find({}).fetch());

  return (
    <div>
      {blocks.map((block) => (
        <div key={block._id}>
          <h2>{block.title}</h2>
          <p>{block.content}</p>
        </div>
      ))}
    </div>
  );
};
