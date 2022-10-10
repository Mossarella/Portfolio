import React, { Suspense } from "react";

let trueLoadingTime=3000;
let loadingTime=0;
const App = React.lazy(() => {
    return Promise.all([
      import("./App"),
      new Promise(resolve => setTimeout(resolve, loadingTime))
    ])
    .then(([moduleExports]) => moduleExports);
  });

  function LoadingScreen(){
    return <div>Loading</div>
  }

function Loader() {
    return (
      <div>

      <Suspense fallback={LoadingScreen()}>
      <App />
        </Suspense>
        
      </div>
    );
  }
  
  export { Loader };