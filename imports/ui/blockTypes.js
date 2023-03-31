import React from "react";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";
import UilCheckSquare from "@iconscout/react-unicons/icons/uil-check-square";
import UilImageV from "@iconscout/react-unicons/icons/uil-image-v";
import UilGrids from "@iconscout/react-unicons/icons/uil-grids";
import UilLink from "@iconscout/react-unicons/icons/uil-link";

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
