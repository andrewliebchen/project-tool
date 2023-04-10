import { Flex, Grid } from "theme-ui";
import AppContext from "./AppContext";
import Block from "./Block";
import BlocksNavigation from "./BlocksNavigation";
import React, { useContext } from "react";
import SlidesPreview from "./SlidesPreview";

export const App = () => {
  const { blocks } = useContext(AppContext);

  return (
    <Grid gap={6} columns={["2fr 5fr 2fr"]} sx={{ minHeight: "100vh" }}>
      <BlocksNavigation />
      <Flex sx={{ flexDirection: "column" }}>
        {blocks.map((block) => (
          <Block key={block._id} block={block} />
        ))}
      </Flex>
      <SlidesPreview />
    </Grid>
  );
};
