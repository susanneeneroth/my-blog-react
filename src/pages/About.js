const About = () => {
    return ( 
        <div>
            <h2 className="page-title">About this project</h2>
            <p>I am studying Front End Development at Medieinstitutet 2020-2022, and this is a personal learning project in React. My aim is to learn as much as possible about ReactJS by building a blog page with different functions.</p>

            <h3 className="page-subtitle">Server for local database</h3>
            <p>So far I have used json server to be able to use a local database with fetch, included a function to add blogs and delete blogs to and from the database file, which is save as a .db file in the projects directory.</p>
            
            <h3 className="page-subtitle">Git Kraken and GitHub</h3>
            <p>I am also using Git Kraken together with Git Hub to be able to do backups to a repository on Git Hub. I work in a dev branch until I am finished with the project. I have not created feature branches so far, since I am the only one working on the project, but I might try it just to get exercise in it later on.   
            </p>

            <h3 className="page-subtitle">Add and delete</h3>
            <p>One part of the project is to create a protected page of the Add blog page, since I don't want every visitor to be able to add blogs, only logged in users. Same with the delete function, the plan is to create a function so that it is only visible when logged in.</p>

            <h3 className="page-subtitle">Search blogs</h3>
            <p>The idea with the search field in the header is to create a search for the blogs. For now it is only a form without any function, but it will get there, hopefully soon. 🤓</p>

        </div>
     );
}
 
export default About;