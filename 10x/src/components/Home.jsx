import React from "react";
import Form1 from "./form1/Form1";
import Form2 from "./form2/Form2";
function Home() {
  return (
    <div>
      <section className="container mx-auto lg:flex" id="form1">
        <Form1 />
        <Form2 />
      </section>
    </div>
  );
}

export default Home;
