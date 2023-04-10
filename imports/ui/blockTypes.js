import React from "react";
import {
  UilCheckSquare,
  UilGrids,
  UilImageV,
  UilLink,
  UilTextFields,
} from "@iconscout/react-unicons";

export default {
  checklist: { label: "Checklist", icon: <UilCheckSquare /> },
  image: { label: "Image", icon: <UilImageV /> },
  link: { label: "Link", icon: <UilLink /> },
  text: {
    label: "Text",
    icon: <UilTextFields />,
  },
  tasks: { label: "Tasks", icon: <UilGrids /> },
};
