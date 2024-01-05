import React from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import Logout from './Logout';

function Profile() {

    const user = useSelector(selectUser)
    return (
        <div className={"container"}>
            <h1>User Profile</h1>
            <div>
                <img height={100} width={100} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User Profile" />
            </div>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <div>
                <h3>About Me</h3>
                <p>
                    Hello! I'm a passionate individual with a deep love for learning and exploring new ideas. My curiosity drives me to constantly seek knowledge and understand the world around me. I find joy in creative expression, whether it's through writing, problem-solving, or engaging in meaningful conversations. As someone who values both the arts and sciences, I strive to maintain a balance between analytical thinking and imaginative pursuits. Outside of my professional endeavors, you'll often find me immersed in books, experimenting with new recipes in the kitchen, or taking long walks to appreciate the beauty of nature. Life, to me, is a continuous journey of growth and self-discovery.
                </p>
            </div>
        </div>
    );
}

export default Profile;
