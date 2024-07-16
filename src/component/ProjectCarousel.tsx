import {
  Flex,
  Image,
  useBreakpointValue,
  ResponsiveValue,
  FlexProps,
  Box,
} from "@chakra-ui/react";
import { Carousel } from "antd";
import Building7 from "../assets/images/building7.jpg";
import B5 from "../assets/images/Untitled-5.png";
import B3 from "../assets/images/Untitled-3.png";
import B1 from "../assets/images/Untitled-1.png";
import Building4 from "../assets/images/building4.jpg";
import Building6 from "../assets/images/building6.jpg";

const ProjectCarousel = () => {
  const slidesToShow = useBreakpointValue({ base: 1, md: 3 });
  const commonProps: FlexProps = {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    h: "100%",
    flexDir: "column" as ResponsiveValue<"column" | "row">,
  };

  const carouselItems = [
    { src: Building7 },
    { src: B5 },
    { src: B3 },
    { src: B1 },
    { src: Building4 },
    { src: Building6 },
  ];
  return (
    <>
      <Flex {...commonProps}>
        <Carousel slidesToShow={slidesToShow} autoplay autoplaySpeed={3000}>
          {carouselItems.map((item, index) => (
            <Flex
              position={"relative"}
              key={index}
              h={{ md: "295px", base: "350px" }}
              w={"100%"}
              px={"10px"}
              pr={2}
            >
              <Image
                src={item.src}
                height={"full"}
                width={"full"}
                borderRadius={"md"}
                boxShadow={"lg"}
              />
              <Box
                position={"absolute"}
                top={"0px"}
                left={"0px"}
                width={"100%"}
                height={"100%"}
                bgGradient={
                  "linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                }
                zIndex={1}
              />
            </Flex>
          ))}
        </Carousel>
      </Flex>
    </>
  );
};

export default ProjectCarousel;
