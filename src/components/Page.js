import { useEffect } from 'react';

let Page = (props)=>{
    useEffect(() => {
        document.title = "Amadou Ibrahim - "+props.pageTitle
      });
      return null
}

export default Page;