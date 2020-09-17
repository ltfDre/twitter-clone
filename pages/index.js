import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet/index";


function HomePage() {
  return (
    <Layout>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-08-25")}
        text={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}
        >
      </Tweet>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-08-25")}
        text={`Sed ut perspiciatis 
        unde omnis iste natus error sit voluptatem accusantium 
        
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}
        >
      </Tweet>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-09-07")}
        text={`Ne oldun bizim agiler. `}
        >
      </Tweet>
      <Tweet 
        name="Lütfi Dereli" 
        slug="ltfDre" 
        dateTime={new Date("2020-09-07")}
        text={`Ne oldun bizim agiler. `}
        >
      </Tweet>
    </Layout>
  )
}

export default HomePage