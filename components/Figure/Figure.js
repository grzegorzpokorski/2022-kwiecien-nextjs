import styled from "styled-components";
import Image from "next/image";

const Figure = ({ image }) => {
  return (
    <ImageContainer>
      <Image
        src={image.src}
        alt={image.alt}
        width="880"
        height="560"
        objectFit="cover"
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.figure`
  display: block;
  overflow: hidden;
`;

export default Figure;
