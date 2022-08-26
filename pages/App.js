import React from "react";
import {App} from "../src/index.js";

const HomePage=(props)=>{
    console.log({props})
    return <App/>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://demo4933567.mockable.io`)
    const data = await res.json()

    console.log({data})
  
    // Pass data to the page via props
    return { props: { data } }
  }
  

export default HomePage