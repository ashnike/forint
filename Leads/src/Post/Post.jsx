import React from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function Post() {
  return (
    <section className="dark:bg-gray-900">
      <div className="flex justify-center">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>Explore</Button>
          <Button>Discover</Button>
        </ButtonGroup>
      </div>
    </section>
  );
}

export default Post;
