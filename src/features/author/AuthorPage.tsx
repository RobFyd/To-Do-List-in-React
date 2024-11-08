import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { WrapperAuthor } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="About author" />
      <Section
        title="Robert Fydrych"
        body={
          <WrapperAuthor>
            <p>
              <strong>Hi there !</strong> 🙂
            </p>
            <p>
              My name is Robert, and while I originally hail from Poland, I've been calling England my home for the last decade. I'm a frontend developer with about two years of experience under my belt, so I’m past the beginner stage and continuously evolving.
            </p>
            <p>
              Coding has quickly grown into a passion of mine. There's nothing quite like the thrill of bringing new and interesting projects to life on my screen. When I'm not coding, you might find me losing track of time in my favorite video game, tinkering with my car, or tackling a fun DIY project at home.
            </p>
            <p>
              I also have a deep love for the great outdoors. Hiking through natural landscapes like Malvern Hills, Puzzlewood, Clearwell Caves, Dunraven Bay, and many more refreshes my spirit and gives me a much-needed break from the tech world.
            </p>
            <p>
              Programming is not just a job for me, it is a journey of continuous learning and personal growth. I’m excited to see where this path leads and am eager to contribute to creative and dynamic teams. Let’s connect and create something incredible together! 👍
            </p>
          </WrapperAuthor>
        }
      />
    </Container>
  );
}

export default AuthorPage;
