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
              <strong>Hello</strong> 🙂
            </p>
            <p>
              My name is Robert and I am a beginner frontend developer. I come
              from Poland, but for about 10 years, I have been living in
              England.
            </p>
            <p>
              Coding has become my new passion, and I can't tear myself away
              from the screen when I'm creating something new and interesting.
              When I need a rest, I start my favorite computer game or tinker
              with the car or do some projects around the house. I also love to
              spend time outdoors actively, hiking in the bosom of nature is
              what I love, and it allows me to take a break from everyday life.
              This year, I have visited Malvern Hills, Puzzlewood, Clearwell
              Caves, and Dunraven Bay, among others.
            </p>
            <p>
              Programming gives me a lot of satisfaction and enables me to
              constantly develop. I hope that I will stay on this path forever👍
            </p>
          </WrapperAuthor>
        }
      />
    </Container>
  );
}

export default AuthorPage;
