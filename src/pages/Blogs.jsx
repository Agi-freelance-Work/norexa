import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/mockData';
// Uses styles from Home and TopPicks already, but kept separate for structure

const Blogs = () => {
    return (
        <div className="blogs-page auto-container section">
            <div className="container">
                <header className="page-header">
                    <h1>Fashion & Lifestyle Blog</h1>
                    <p>Get the latest fashion tips, trends, and money-saving guides.</p>
                </header>

                <div className="blogs-grid">
                    {blogPosts.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                    {/* duplicating for demo visual fullness */}
                    {blogPosts.map(blog => (
                        <BlogCard key={blog.id + 'dup'} blog={{ ...blog, id: blog.id + 'dup' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
