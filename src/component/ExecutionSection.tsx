import { Button, Flex, Heading, Image } from "@chakra-ui/react"
import Phone from '../assets/images/phone-ringing.png'

const ExecutionSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+2348111511103"
  }
  return (
    <>
      <Flex
        w={"100%"}
        h={"20vh"}
        bg={"#F28C28"}
        flexDir={{ lg: "row", md: "row", base: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          base: "center",
        }}
        px={{ lg: 0, md: 0, base: "20px" }}
        gap={{ lg: "0px", md: "0px", base: "7px" }}
      >
        <Flex
          alignItems={{ lg: "center", md: "center", base: "none" }}
          justifyContent={{ lg: "center", md: "center", base: "none" }}
          display={"flex"}
          px={{ lg: "100px", md: "10px", base: "none" }}
        >
          <Heading
            as={"h2"}
            textTransform={"capitalize"}
            fontSize={{ lg: "40px", md: "28px", base: "22px" }}
            fontFamily={"Lato"}
            color={"#f1f2f3"}
          >
            start executing your project
          </Heading>
        </Flex>
        <Flex
          alignItems={{ lg: "center", md: "center", base: "none" }}
          justifyContent={{ lg: "center", md: "center", base: "none" }}
          display={"flex"}
          pl={{ lg: "100px", md: "100px", base: "0px" }}
          w={"70vh"}
          bg={{ lg: "#000000", md: "#000000", base: "none" }}
          gap={"10px"}
          clipPath={{
            lg: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            md: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            base: "none",
          }}
          zIndex={2}
        >
          <Flex
            bg={"white"}
            px={{ md: "12px", base: "10px" }}
            py={"5px"}
            borderRadius={"3px"}
          >
            <Flex px={"6px"}>
              <Image
                src={Phone}
                alt="phone"
                width={"30px"}
                height={"30px"}
                mt={1}
              />
            </Flex>
            <Button
              textAlign={"center"}
              fontFamily={"Lato"}
              fontWeight={500}
              fontSize={"16px"}
              onClick={handleCall}
            >
              +234 811 151 1103
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ExecutionSection
