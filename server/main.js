import { Meteor } from "meteor/meteor";
import { BlocksCollection } from "/imports/api/blocks";

const insertBlock = (args) =>
  BlocksCollection.insert({ ...args, createdAt: Date.now() });

Meteor.startup(() => {
  if (BlocksCollection.find().count() === 0) {
    insertBlock({
      title: "Sample block",
      type: "text",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur purus ut. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Viverra justo nec ultrices dui. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Vitae tortor condimentum lacinia quis. Et tortor consequat id porta nibh venenatis. Semper risus in hendrerit gravida rutrum. Leo in vitae turpis massa sed elementum.",
    });
  }
});
