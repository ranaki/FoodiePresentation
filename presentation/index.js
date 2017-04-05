// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Table, TableRow, TableItem, TableHeaderItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  foodieLogo: require("../assets/FoodieFinder3.jpg"),
  joyLuck: require("../assets/JoyLuck.png"),
  ohMai: require("../assets/OhMai.png")
};

preloader(images);

const theme = createTheme({
  primary: "#CC4304" //"#CC4304" //#CC6B00" //"#CC2600" //"#CC6B00"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["appear"]} bgColor="white">
          <Heading size={3} textColor="primary">Meet The</Heading>
          <Heading size={1} textColor="primary" caps>Team</Heading>
          <hr />
          <br />
          <Text margin="10px 0 0" textColor="#692202" size={3} fit bold>
            Randy  -  Rick  -  Jonathan
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Image src={images.foodieLogo} width="950px"></Image>
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
            For food explorers like us looking for a new eating adventure
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <BlockQuote>
            <Quote>Try something new today...</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="#CC4304" textColor="white">
          <Heading size={6} textColor="white" caps>Choose From 40 Food Categories</Heading>
          <br />
          <hr />
          <Table>
          <tbody>            
            <TableRow>
              <TableItem>Mexican</TableItem>
              <TableItem>Afghan</TableItem>
              <TableItem>Barbeque</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Gastropubs</TableItem>
              <TableItem>Asian Fusion</TableItem>
              <TableItem>Sandwiches</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>American</TableItem>
              <TableItem>Salad</TableItem>
              <TableItem>Japanese</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Hot Pot</TableItem>
              <TableItem>Vietnamese</TableItem>
              <TableItem>Vegan</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Italian</TableItem>
              <TableItem>Wine Bars</TableItem>
              <TableItem>Tapas</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Cafes</TableItem>
              <TableItem>Breakfast</TableItem>
              <TableItem>Sushi</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>Ramen</TableItem>
              <TableItem>Izakaya</TableItem>
              <TableItem>Burgers</TableItem>
            </TableRow>
          </tbody>            
          </Table>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Give us a location:
          </Heading>
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
            84190
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <BlockQuote>
            <Quote>And we will do the rest!</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.joyLuck} width="800px"></Image>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold>
            You have options
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>Features</Heading>
          <hr />
          <Heading size={5} textColor="secondary">Favorites</Heading>
          <br />
          <Heading size={5} textColor="secondary">Categories</Heading>
          <br />
          <Heading size={5} textColor="secondary">Location</Heading>
          <br />
          <Heading size={5} textColor="secondary">Automagically Find Good Eats</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <BlockQuote>
            <Quote>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</Quote>
            <Cite textColor="#692202">Ruth Reichl</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["appear"]} bgColor="white">
          <Image src={images.foodieLogo} width="950px"></Image>
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
            Randy Van - Rick Baker - Jonathan Mancia
          </Text>
        </Slide>
      </Deck>
    );
  }
}
