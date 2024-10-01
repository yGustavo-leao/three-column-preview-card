import { Card, Category, Description, Img, ImgContainer, LearnMore } from "../Card/Card.styled"
import { Container } from "./CardSection.styled"

export const CardSection = () => {
    return (
        <Container>
            <Card $mainColor="#e38826">
                <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/icon-sedans.svg`} />
                </ImgContainer>
                <Category>SEDANS</Category>
                <Description>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</Description>
                <LearnMore $mainColor="#e38826">Learn More</LearnMore>
            </Card>
            <Card $mainColor="#006970">
                <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/icon-suvs.svg`} />
                </ImgContainer>
                <Category>SUVS</Category>
                <Description>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</Description>
                <LearnMore $mainColor="#006970">Learn More</LearnMore>
            </Card>
            <Card $mainColor="#004241">
                <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/icon-luxury.svg`} />
                </ImgContainer>
                <Category>LUXURY</Category>
                <Description>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</Description>
                <LearnMore $mainColor="#004241">Learn More</LearnMore>
            </Card>
        </Container>
    )
}