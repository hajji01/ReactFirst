import React, { useState, useEffect } from 'react';
import { fetchAllPosts } from '../services/PostsService';

const PostListAlternative = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchAllPosts();
            setPosts(data);
        };
        loadPosts();
    }, []);

    return (
        <div>
            <h1>Liste des Posts (version alternative)</h1>
            {posts.length === 0 ? (
                <p>Aucun post disponible</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} style={{ border: '1px solid #ddd', margin: '1rem 0', padding: '1rem' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostListAlternative;