import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  const responseInfo = useGetAllPostQuery()
  // const responseInfo = useGetPostByIdQuery(5);
  // const responseInfo = useGetPostByLimitQuery(5);
  // const [deletePost, responseInfo] = useDeletePostMutation(2);
  //console.log(responseInfo);
  // const [createPost, responseInfo] = useCreatePostMutation()
  //const [updatePost, responseInfo] = useUpdatePostMutation()

  // for creating/adding new post
  const newPost = {
    title: "This is New New Title",
    body: "This is New New Body",
    userId: 1,
  };

  // to update post
  const updatePostData = {
    id: 1,
    title: "This is Update Post Title",
    body: "This is Update Post Body",
    userId: 1,
  };

  // checking responses using console.log
  console.log("Response Information: ", responseInfo);
  console.log("Data: ", responseInfo.data);
  console.log("Success: ", responseInfo.isSuccess);

  if (responseInfo.isLoading) return <div>Loading..</div>;
  if (responseInfo.isError)
    return (
      <h1>
        An error occured
        {responseInfo.error.error}
      </h1>
    );

  return (
    // 1.) Get All Data
    <div className="App">
     <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
     {
       responseInfo.data.map((post, i) =>
       <div key={i}>
         <h2>{post.id}{post.title}</h2>
         <p>{post.body}</p>
         <hr />
       </div>
       )
     }
    </div>

    // 2.) Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div>

    // 3.) Get Limited Data { eg, total  5 datas}
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
    //   {responseInfo.data.map((post, i) => (
    //     <div key={i}>
    //       <h2>
    //         {post.id} {post.title}
    //       </h2>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //   ))}
    // </div>

    // 4.) Delete Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button onClick={() => { deletePost(2) }}>Delete Post</button>
    // </div>

    // 5.) Create Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
    //   <button onClick={() => { createPost(newPost) }}>Add Post</button>
    // </div>

    // 6.) Update Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Update Data)</h1>
    //   <button
    //     onClick={() => {
    //       updatePost(updatePostData);
    //     }}
    //   >
    //     Update Post
    //   </button>
    // </div>
  );
}

export default App;

// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query
