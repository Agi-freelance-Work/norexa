import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return <Navigate to="/blogs" />;
    }

    return (
        <article className="section auto-container">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '12px' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem' }}>{post.category}</span>
                <h1 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--color-dark)' }}>{post.title}</h1>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem', maxHeight: '450px', objectFit: 'cover' }} />

                <div style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: post.content }} />

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to={post.ctaLink || "/top-picks"} className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '8px', textDecoration: 'none' }}>{post.ctaText || "Shop Top Fashion Deals Now"}</Link>
                </div>
            </div>
        </article>
    );
};
export default BlogPost;
