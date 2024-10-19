// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('http://localhost:5000/api/profile');
            setProfile(response.data);
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <aside className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#discussions">Discussions</a></li>
                    <li><a href="#research">Research</a></li>
                </ul>
            </aside>
            <main className="profile">
                <div className="profile-header">
                    <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
                    <div className="profile-info">
                        <h1>{profile.name}</h1>
                        <p><strong>Bio:</strong> {profile.bio}</p>
                        <p><strong>Organization:</strong> {profile.organization}</p>
                        <button className="edit-btn">Edit Profile</button>
                    </div>
                </div>
                <section className="saved-posts">
                    <h2>Saved Posts</h2>
                    <ul>
                        {profile.savedPosts.map(post => (
                            <li key={post.id}>
                                <a href={post.link}>{post.title}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Profile;
