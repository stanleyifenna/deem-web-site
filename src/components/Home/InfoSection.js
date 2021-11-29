import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap,
  TopLine, Heading, Subtitle, BtnWrap, Img } from '.HeroSectionElements'
function InfoSection({
    topLine,
    headline,
    description,
    Subheadline3,
    img,
    alt,
    Subheadline2,
    Subheadline1,
    headlinee,
    headlinee2,
}) {
    
    return (
        <div>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <button>Create free account</button>
                                <button><img src="images/google-play.svg" alt="PWA" /> Get on Android</button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                       <Column2>
                       <ImgWrap>
                           <Img />
                        </ImgWrap>
                       </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection
