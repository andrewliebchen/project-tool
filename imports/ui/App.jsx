import React, { useContext } from "react";
import { Text, Flex, Box, Button, Grid } from "theme-ui";
import Block from "./Block";
import SlidesPreview from "./SlidesPreview";
import BlocksNavigation from "./BlocksNavigation";
import AppContext from "./AppContext";

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
