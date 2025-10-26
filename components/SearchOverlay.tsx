import React, { useState, useEffect, useMemo } from 'react';
import { Page } from '../App';
import { BlogPost, SearchResult } from '../types';
import { NAV_LINKS, BLOG_POSTS, FAQ_DATA } from '../constants';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (page: Page) => void;
  selectBlogPost: (post: BlogPost) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, navigate, selectBlogPost }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchableContent = useMemo(() => {
    const content: SearchResult[] = [];

    // Pages
    NAV_LINKS.forEach(link => {
      content.push({
        type: 'Page',
        title: link.name,
        excerpt: `Navigate to the ${link.name} page.`,
        action: () => navigate(link.name),
      });
    });

    // Blog Posts
    BLOG_POSTS.forEach(post => {
      content.push({
        type: 'Blog',
        title: post.title,
        excerpt: post.content,
        action: () => selectBlogPost(post),
      });
    });

    // FAQs
    FAQ_DATA.forEach(category => {
      category.items.forEach(item => {
        content.push({
          type: 'FAQ',
          title: item.question,
          excerpt: item.answer,
          action: () => navigate('FAQ'),
        });
      });
    });

    return content;
  }, [navigate, selectBlogPost]);

  useEffect(() => {
    if (query.length > 2) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = searchableContent.filter(item => 
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.excerpt.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, searchableContent]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleResultClick = (result: SearchResult) => {
    result.action();
    onClose();
  };
  
  const getIconForType = (type: string) => {
    switch(type) {
        case 'Page': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
        case 'Blog': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-1-4h1" /></svg>;
        case 'FAQ': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
        default: return null;
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex justify-center items-start pt-20" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the site..."
            autoFocus
            className="w-full text-lg p-2 bg-gray-50 border-2 border-gray-200 rounded-md focus:ring-teal-500 focus:border-teal-500 outline-none"
          />
        </div>
        <div className="overflow-y-auto p-4">
          {query.length > 2 && results.length === 0 && (
            <p className="text-center text-gray-500 py-8">No results found for "{query}".</p>
          )}
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index}>
                <button onClick={() => handleResultClick(result)} className="w-full text-left p-4 rounded-md hover:bg-teal-50 transition-colors flex items-start space-x-4">
                  <div className="flex-shrink-0 text-teal-600 mt-1">{getIconForType(result.type)}</div>
                  <div>
                    <h3 className="font-bold text-teal-800">{result.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{result.excerpt}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
       <button onClick={onClose} className="absolute top-5 right-5 text-white hover:text-gray-300 text-4xl">&times;</button>
    </div>
  );
};

export default SearchOverlay;