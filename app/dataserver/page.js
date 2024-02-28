async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

export default async function DataServer() {
  const posts = await fetchData();

  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li className="border py-4 px-4 bg-green-700" key={item.id}>
            {item.title.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
