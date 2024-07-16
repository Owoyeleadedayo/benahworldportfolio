import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import User from "../assets/images/user (1).png";
import { Carousel } from "antd";

const ClientReview = () => {
  const testimonials = [
    {
      name: "Success Adoghe",
      company: "Kadosen Energy Ltd",
      comment:
        "Benah Worldwide Services is one of the most reliable builders we have contracted with. We hope to work again with them on our next project.",
    },
    {
      name: "Chima",
      company: "Veroclef Ltd",
      comment:
        "One of the best general contractors we have worked with. The expert team delivered excellent quality service under budget.",
    },
    {
      name: "Wale Akinyooye",
      company: "Publishing Rhapsody Company",
      comment:
        "Highly impressed with their expertise in design. Their execution was awesome. They have skilled team members that deliver professional services. Looking forward to working more with them.",
    },
    {
      name: "Austin Asazobor",
      company: "AZ-Toyrom Nig Ltd",
      comment:
        "Benah worldwide services' designs are awesome. They provide excellent services at a reasonable price.",
    },
    {
      name: "Samuel Imonode",
      company: "Secthem Project Managers",
      comment:
        "Benah worldwide services is one of the best building contractors. Their services are fantastic.",
    },
    {
      name: "Isreal Aibaogun",
      company: "Private Client",
      comment:
        "We are pleased with the services of Benah worldwide services. Their workforce is professional and cordial.",
    },
    {
      name: "Ehis Esekhiagbe",
      company: "Private Client",
      comment:
        "Benah worldwide services are extremely reliable and cost-effective for timely completion at a good price.",
    },
  ];

  return (
    <Flex
      pt={"50px"}
      bgColor={"#f1f2f3"}
      width={"100%"}
      h={"100%"}
      px={"30px"}
      flexDir={"column"}
      gap={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        gap={"5px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Heading as={"h1"} fontFamily={"Lato"} color={"#0047AB"}>
          Clients Testimonials
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ md: "30px", base: "17px" }}
          fontFamily={"Lato"}
        >
          What Our Clients Say About Us
        </Text>
      </Flex>
      <Box width={"100%"} maxWidth={"600px"}>
        <Carousel dots={false} slidesToShow={1} autoplay autoplaySpeed={4000}>
          {testimonials.map((client, index) => (
            <Flex
              key={index}
              justifyContent="center"
              alignItems="center"
              py={4}
            >
              <Box
                width="100%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
                p={2}
                shadow="md"
              >
                <Flex alignItems="center">
                  <Image
                    objectFit="cover"
                    src={User}
                    alt="user"
                    width="80px"
                    height="80px"
                    mx={1}
                  />
                  <Stack spacing={1} ml={4}>
                    <Heading
                      fontSize={{ lg: "22px", md: "22px", base: "18px" }}
                      fontFamily={"Lato"}
                    >
                      {client.name}
                    </Heading>
                    <Text
                      fontSize={{ lg: "17px", md: "17px", base: "16px" }}
                      color={"#0047AB"}
                      fontFamily={"Lato"}
                    >
                      {client.company}
                    </Text>
                  </Stack>
                </Flex>
                <Text
                  pb="2"
                  ml={{ lg: "100px", md: "100px", base: "10px" }}
                  maxW={"450px"}
                  fontFamily={"Lato"}
                  fontSize={"18px"}
                >
                  "{client.comment}"
                </Text>
              </Box>
            </Flex>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default ClientReview;
