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
  Table, TableRow, TableItem, TableHeaderItem,
  Appear
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
  foodieLogoBlue: require("../assets/FoodieFindaBlueLogo.png"),
  mobileFoodie: require("../assets/mobileFoodie.png"),
  joyLuck: require("../assets/JoyLuck.png"),
  ohMai: require("../assets/OhMai.png"),
  dpl: require("../assets/DevPoint-LD-Spring-2017.png"),
  fancyBack: require("../assets/fancyPlace.jpg"),
  foodieHome: require("../assets/foodieHome.png"),
  rick: require("../assets/Rick.jpg"),
  jonathan: require("../assets/Jonathan.jpg"),
  randy: require("../assets/Randy.jpg")

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
        <Slide transition={["appear"]} bgColor="white" bgImage={images.fancyBack} bgDarken={.7}>
          <Heading size={1} textColor="primary" caps>Team</Heading>
          <hr />
          <br />
          <Image src={images.rick} width={300}></Image><Image src={images.jonathan} width={300}></Image><Image src={images.randy} width={300}></Image>
          <hr/>
          <Text margin="10px 0 0" textColor="white" size={5} fit bold>
            Rick  -  Jonathan - Randy
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Image src={images.foodieLogo} width="950px" style={{border: '10px solid #692202'}}></Image>
          <hr/>
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
            For food explorers like us 
          </Text>
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
            looking for a new eating adventure
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="primary">
          <BlockQuote>
            <Quote>Try something new today...</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="primary">
          <Heading size={1} textColor="#1565c0">Why?</Heading>
          <br />
          <hr />
          <br />
          <Heading size={1} textColor="#1565c0">Who?</Heading>
        </Slide>
        <Slide transition={["appear"]} bgColor="primary" bgImage={images.foodieHome}>
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
          <Text margin="10px 0 0" textColor="#4b1a02" size={1} fit bold>
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
          <Heading size={1} textColor="primary" caps>Features</Heading>
          <hr />
          <br />
          <Appear><Heading size={4} textColor="#692202">Favorites</Heading></Appear>
          <br />
          <Appear><Heading size={4} textColor="#692202">Categories</Heading></Appear>
          <br />
          <Appear><Heading size={4} textColor="#692202">Location</Heading></Appear>
          <br />
          <Appear><Heading size={5} textColor="#692202">Auto<span style={{color: '#CC4304'}}>magically</span> Find Good Eats</Heading></Appear>
        </Slide>
        <Slide transition={["appear"]} bgColor="primary">
          {/* <Image src={images.mobileFoodie} width="800px" style={{border: '10px solid black'}} fit></Image> */}
          <Image src={images.mobileFoodie} width="700px"></Image>
          <hr/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="#4b1a02">
            Coming Soon!
          </Heading>
          <hr />
          <Heading size={4}  textColor="white">Locations</Heading>
          <br />
          <Heading size={4}  textColor="white">Reviews</Heading>
          <br />
          <Heading size={4}  textColor="white">More Categories</Heading>
          <br />
          <Heading size={4}  textColor="white">Full-size Photos</Heading>
          <br />
          <Heading size={4}  textColor="white">Share Favs with Foodies</Heading>
          <hr />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <BlockQuote>
            <Quote>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</Quote>
            <Cite textColor="#692202">Ruth Reichl</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white" textColor="primary">
          <Heading bgColor="#1565c0" size={3} textColor="white">Attention All Foodies</Heading>
          <br />
          <hr />
          <br />
          <Heading size={4} textColor="primary">Come visit our table...</Heading>
          <Heading size={1} textColor="primary">Good Eats!</Heading>
        </Slide>
        <Slide transition={["appear"]} bgColor="white" bgImage={images.fancyBack} bgDarken={.7}>
          <Image src={images.rick} width={300}></Image><Image src={images.jonathan} width={300}></Image><Image src={images.randy} width={300}></Image>
          <hr/>
          <Heading size={1} textColor="primary" caps>Team Foodie</Heading>
          <hr />
          <br />
          <Text margin="10px 0 0" textColor="white" size={3} fit bold>
            Rick  -  Jonathan - Randy
          </Text>
        </Slide>
        <Slide transition={["appear"]} bgColor="white">
          <Text margin="10px 0 0" textColor="#692202" size={1} fit bold>
           Thank you!
          </Text>
          <Image src={images.foodieLogo} width="950px" style={{border: '2px solid #692202'}}></Image>
          <hr/>
          <Heading size={6} textColor="#1565c0">https://foodie-finda.herokuapp.com</Heading>
        </Slide>
      </Deck>
    );
  }
}
