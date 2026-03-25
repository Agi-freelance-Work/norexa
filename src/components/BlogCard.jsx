import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h4 className="blog-title"><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h4>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-footer">
                    <span className="blog-date">{blog.date}</span>
                    <Link to={`/blog/${blog.id}`} className="blog-read-more">
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
