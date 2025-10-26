import React from 'react';
import { BlogPost } from '../types';
import SocialShareButtons from '../components/SocialShareButtons';

interface BlogDetailProps {
    post: BlogPost;
    goBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, goBack }) => {
    return (
        <div className="bg-stone-100">
            {/* Header Section with Image */}
            <section className="relative bg-cover bg-center h-96 text-white text-center flex flex-col justify-center" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold">{post.title}</h1>
                    <p className="text-lg mt-4">{post.author} - {post.date}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                     <div className="mb-12">
                        <button onClick={goBack} className="bg-stone-200 px-4 py-2 rounded-md shadow hover:bg-stone-300 transition-colors text-teal-700 font-bold">
                            &larr; Back to Blog
                        </button>
                    </div>
                    
                    <article className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
                       {post.content.split('\n').map((paragraph, index) => (
                           <p key={index}>{paragraph}</p>
                       ))}
                    </article>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <SocialShareButtons title={post.title} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
