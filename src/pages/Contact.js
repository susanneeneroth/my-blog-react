const Contact = () => {
    return ( 
        <div>
            <h2 className="page-title">Contact</h2>
            <p className="contact-text">Write us a message:</p>
            <div className="form-styling">
                <form>
                    <label>Your First Name</label>
                    <input type="text" required placeholder="Your First Name"/>
                    <label>Your Last Name</label>
                    <input type="text" required placeholder="Your Last Name"/>
                    <label>Your message</label>
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;