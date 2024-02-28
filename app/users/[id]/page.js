"use client";

function Page({ params }) {
  console.log(params);
  return <h1>Info about {params.id}</h1>;
}

export default Page;
