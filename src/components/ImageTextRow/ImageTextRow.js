import React from "react";
import { Flex, Box, Image } from "rebass";

class ImageTextRow extends React.Component {
  render() {
    return (
      <Flex
        flexWrap="wrap"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: [20, 20, 40, 90],
          flexDirection:
            this.props.imagePosition === "right" ? "row-reverse" : "row",
          padding: [2, 20, 20],
        }}
      >
        <Box width={[1, 1, 1 / 2]}>
          <Image
            src={this.props.imageSrc}
            style={{ borderRadius: "1rem", padding: "0 2rem" }}
          />
        </Box>
        <Box
          width={[1, 1, 1 / 2]}
          sx={{
            padding: [10, 10, 30, 50],
            paddingTop: [40, 30, 20, 10],
            paddingBottom: [40, 30, 20, 10],
          }}
        >
          <h1 style={{ fontWeight: 500, padding: "0 2rem" }}>
            {this.props.title}
          </h1>
          <div style={{ color: "#57737a", padding: "0 2rem" }}>
            {this.props.children}
          </div>
        </Box>
      </Flex>
    );
  }
}

export default ImageTextRow;
