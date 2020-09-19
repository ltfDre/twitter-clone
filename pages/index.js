import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet/index";


function HomePage() {
  return (
    <Layout>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-09-19")}
        text={`This is my first clone project by Next JS ! 🎉`}
        >
      </Tweet>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-09-19")}
        text={`You can create amazing side projects like this, too !  💫`}
        >
      </Tweet>
    </Layout>
  )
}

export default HomePage