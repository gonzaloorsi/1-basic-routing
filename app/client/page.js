"use client";

export default function Client() {
  console.log("Hello from the (client component)");
  return <button onClick={() => alert("Hello world!")}>Click me</button>;
}
