import GlobalLayaut from "../Components/GlobalLayaut";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalLayaut>
      <Component {...pageProps} />
    </GlobalLayaut>
  );
};

export default MyApp;
