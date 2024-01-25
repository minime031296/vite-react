function PostItem({ data, page, setPage}) {
    return (
      <div>
        <p style= {{border : "2px solid black",background:"blue" }}>PostItem Components</p>
        {data.map((post) => {
            return(
          <div key={post.id} style={{border : "3px solid red"}}>
            <p style={{color : "green"}}>[{post.id}]</p>
            <p style={{color : "lightcoral", textDecoration : "underline"}}>{post.title}</p>
            <p>{post.body}</p>
          </div>
            )
            })}

        <button style={{fontWeight : "bold"}} onClick={()=>{if(page>1){setPage(page - 1)}}}>Previous</button>
        <p style={{fontWeight : "bold"}}>{page}</p>
        <button onClick={()=>{setPage(page + 1)}}>Next</button>
      </div>
    );
  }
  
  export default PostItem;
  