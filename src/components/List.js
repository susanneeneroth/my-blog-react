import { Link } from 'react-router-dom'


const List = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list" key={blogs.id}>
        <h2 className="page-title">{ title }</h2>
           {blogs.map((blogs) => (
               <div className="blog-preview" key={blogs.id}>
                  <Link to={`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.short}</p>
                      <p>Read more...</p>
                      <p className="blog-author">Written by {blogs.author}</p>
                  </Link>
                 
               </div>
           ))}
        </div>
     );
}
 
export default List;