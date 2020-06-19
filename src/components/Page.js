import React, { useState,useEffect } from 'react';

let Page = (props)=>{
    const [pageTitle, setPageTitle] = useState('Full-Stack Developer')
    useEffect(() => {
        document.title = "Amadou Ibrahim - "+props.pageTitle
      });
      return null
}

export default Page;