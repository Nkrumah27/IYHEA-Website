import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import SocialShareButtons from '../components/SocialShareButtons';

interface BlogProps {
    selectPost: (post: BlogPost) => void;
}

const BlogPostCard: React.FC<{ post: BlogPost; selectPost: (post: BlogPost) => void; }> = ({ post, selectPost }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-teal-800 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.author} - {post.date}</p>
            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); selectPost(post); }} 
                    className="font-semibold text-teal-600 hover:text-teal-800 self-start"
                >
                    Read More &rarr;
                </a>
                <SocialShareButtons title={post.title} />
            </div>
        </div>
    </div>
);

const Blog: React.FC<BlogProps> = ({ selectPost }) => {
    return (
        <div>
            {/* Page Header */}
            <section className="relative bg-cover bg-center text-white py-24 text-center" style={{ backgroundImage: "url('https://picsum.photos/1200/400?random=43')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Stories from Ghana</h1>
                    <p className="text-xl mt-4 max-w-3xl mx-auto">Read about the experiences, adventures, and reflections of our students.</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <BlogPostCard key={index} post={post} selectPost={selectPost} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
