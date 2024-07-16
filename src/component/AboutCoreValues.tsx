import { Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const AboutCoreValues = () => {
    const cardContent = [
      {
        title: "Excellence",
        desc: "Our dedication to excellence is evident in every phase of our work, from meticulous project planning to flawless execution. This unwavering commitment to superior quality and craftsmanship distinguishes us within the industry.",
      },
      {
        title: "Integrity",
        desc: "We uphold the highest standards of integrity, conducting our business with unwavering honesty, transparency, and accountability. By fostering trust and long-term relationships with clients, partners, and stakeholders, we build a solid foundation for success.",
      },
      {
        title: "Innovation",
        desc: "Innovation is central to our organization. We seek cutting-edge technologies and practices to optimize efficiency, enhance productivity, and drive continuous improvement. By staying ahead, we ensure our clients benefit from the most advanced solutions available.",
      },
      {
        title: "Safety",
        desc: "The safety and well-being of our employees, subcontractors, and communities are paramount. We commit to industry best practices and regulations, ensuring safety in every aspect of our operations and creating a secure environment for all.",
      },
      {
        title: "Sustainability",
        desc: "We recognize the importance of minimizing our environmental impact and promoting sustainable construction. Our commitment goes beyond compliance; we seek opportunities to create healthier, more resilient built environments. Embracing sustainability, we aim to leave a positive legacy for future generations.",
      },
      {
        title: "Customer-Centric Focus",
        desc: "We place our customers at the center of everything we do. By understanding their unique needs and exceeding their expectations, we build strong, lasting relationships that drive mutual success. Our dedication to providing exceptional service ensures our clients achieve their goals.",
      },
    ];
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        width={"100%"}
        h={"100%"}
        px={"30px"}
        flexDir={"column"}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Heading as={"h1"} fontFamily={"Lato"} color={"#0047AB"}>
          Our Core Values
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ md: "20px", base: "17px" }}
          fontFamily={"Lato"}
        >
          Our core values serve as the guiding principles that drive our
          organization forward. With a focus on excellence, integrity,
          innovation, safety, sustainability and customer-centric focus. We are
          committed to delivering exceptional results while making a positive
          impact on the world around us.
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          //   px={{ base: "20px", md: "40px" }}
          py={{ base: "20px", md: "40px" }}
        >
          {cardContent.map((item, index) => (
            <Card key={index}>
              <Box py={"5px"}>
                <Heading
                  pt="2"
                  textTransform="uppercase"
                  textAlign={"center"}
                  color={"#0047AB"}
                  fontSize={"18px"}
                  fontFamily={"Lato"}
                >
                  {item.title}
                </Heading>
                <Text
                  py="2"
                  textAlign={"center"}
                  fontSize={"17px"}
                  fontFamily={"Lato"}
                  px={"5px"}
                >
                  {item.desc}
                </Text>
              </Box>
            </Card>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default AboutCoreValues;
