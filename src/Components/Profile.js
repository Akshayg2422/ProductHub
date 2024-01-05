import React from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';

function Profile() {

    const user = useSelector(selectUser)
    return (
        <div className={"container"}>
            <h2>User Profile</h2>
            <div>
                <img height={100} width={100} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Profile" />
            </div>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <div>
                <h3>About Me</h3>
                <p>As a highly skilled React Developer with over 2 years of experience at Leora Infotech, I am proficient in a
                    wide range of technologies and tools, specializing in React JS, Redux Saga, React Hooks, Async Storage,
                    React Router, Flexbox, JavaScript, ES6, Async JS, and TypeScript with a focus on creating reusable
                    components and interfaces. I have actively contributed to significant projects, including Quanta EDAT,
                    Quanta Ticket Management System, Leora Infotech and NSI - FG, wherein I played a pivotal role in
                    various aspects of the software development lifecycle. My expertise extends to seamless API
                    integrations and third-party integrations, enabling efficient and dynamic workflows. As I aspire to excel
                    in the field of Software Development, I am committed to further developing my skills and seeking out
                    innovative projects to contribute my expertise to.</p>
            </div>
            {/* Add more sections as needed, such as user activity, settings, etc. */}
        </div>
    );
}

export default Profile;
