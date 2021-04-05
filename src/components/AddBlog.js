import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [short, setShort] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, short, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
        history.push('/');
    }


    return ( 
        <div className="form-styling">
            <h2 className="page-title">Add blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Short introduction</label>
                <textarea
                  required
                  value={short}
                  onChange={(e) => setShort(e.target.value)}
                ></textarea>
                <label>Text</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <input 
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}

            </form>
        </div>
     );
}
 
export default AddBlog;