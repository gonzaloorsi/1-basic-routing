import Image from "next/image";

export default function User() {
  return (
    <div>
      <h1>User page</h1>
      {/* <Image src={ImageNature} alt="Image of Nature" width={500} height={500} /> */}
      <Image
        src="https://images.unsplash.com/photo-1615487632222-67f3c7504e45?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Palm trees image"
        width={500}
        height={500}
      />
    </div>
  );
}
