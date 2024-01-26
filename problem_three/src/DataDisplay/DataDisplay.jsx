function DataDisplay({ data}) {
    return (
      <div>
        {data.map((post) => (
          <div key={post.id} style={{ border: "3px solid red" }}>
            <p style={{ color: "green" }}>[{post.id}]</p>
            <p style={{ color: "lightcoral", textDecoration: "underline" }}>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
  
        
      </div>
    );
  }
  
  export default DataDisplay;
  