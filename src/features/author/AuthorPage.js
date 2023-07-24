import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <Container>
      <Header title="About author" />
      <Section
        title="Robert Fydrych"
        body={
          <>
            <p>
              Hi! My name is <strong>Robert Fydrych</strong>. I am 40 years old
              and I come from Koszalin in Poland. Currently, I live and work in
              Worcester. It is a picturesque city in England. I am an engineer
              by education and I work as a welder-fabricator. I love hiking,
              survival-horror games, DIY, and recently I got interested in
              programming.
            </p>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
