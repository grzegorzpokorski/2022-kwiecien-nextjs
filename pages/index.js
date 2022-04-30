import Section from "./../components/Section";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";
import P from "./../components/P";

import pagesImage from "./../public/images/pages.webp";

const Home = () => {
  return (
    <main>
      <Section bgColor="white-green" paddingTop={5} paddingBottom={5}>
        <ContentWithImage
          image={pagesImage}
          subtitle="Strony internetowe"
          title="Programowanie stron internetowych"
          content={
            <>
              <P>
                Wykonuję 'szyte na miarę' strony internetowe dostosowane do
                kokretnej grupy docelowej oraz pomagające realizować załorzone
                cele.
              </P>
              <P>
                Moją specjalnością są strony dla małych oraz średnich firm
                oparte na autorskim motywie. Każda strona internetowa
                przygotowywana jest indywidualnie, aby zapewnić jak najlesze
                wrażenia z użytkowania zarówno dla odbiorców jak i dla
                administratorów.
              </P>
              <P>
                Rozszerz zasięg swojej firmy dzięki mojej profesjonalnie
                przygotowanej stronie internetowej.
              </P>
            </>
          }
          href="/strony-internetowe"
        ></ContentWithImage>
      </Section>
    </main>
  );
};

export default Home;
