import React from "react";
import Story from "./Story.js";
import StoryImage from "../IMAGES/story.jpg";
import StoryImage1 from "../IMAGES/story1.jpg";
import StoryImage2 from "../IMAGES/story2.jpg";

class Home extends React.Component {
  state = {
    story: [
      {
        img: StoryImage,
        title: "A New Story Book",
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        img: StoryImage1,
        title: "A Lesson Gaining Story Book",
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        img: StoryImage2,
        title: "A Spider Man Story Book",
        paragraphs:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.story.map((items, index) => {
          return (
            <Story
              StoryImageD={items.img}
              StoryTitle={items.title}
              StoryParaphrase={items.paragraphs}
              StoryIndex={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
