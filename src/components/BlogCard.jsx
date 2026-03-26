import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800';

const BlogCard = ({ blog }) => {
    const handleImgError = (e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <div className="blog-card">
            <div className="blog-image" style={{ borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                <img
                    src={blog.image}
                    alt={blog.title}
                    onError={handleImgError}
                    style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '16px 16px 0 0',
                    }}
                />
            </div>
            <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h4 className="blog-title"><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h4>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <Link to={`/blog/${blog.id}`} className="blog-read-more" style={{ width: '100%', justifyContent: 'center' }}>
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
