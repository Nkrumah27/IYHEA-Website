
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Accommodation from './pages/Accommodation';
import University from './pages/University';
import Ghana from './pages/Ghana';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import GhanaDetail from './pages/GhanaDetail';
import BlogDetail from './pages/BlogDetail';
import SearchOverlay from './components/SearchOverlay';
import { BlogPost } from './types';

export type Page = 'Home' | 'About Us' | 'The Exchange Program' | 'Accommodation' | 'Study at KAAF University' | 'Discover Ghana' | 'Blog' | 'FAQ' | 'Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [ghanaCategory, setGhanaCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    setGhanaCategory(null);
    setSelectedPost(null);
    window.scrollTo(0, 0);
  }, []);

  const selectGhanaCategory = (category: string) => {
    setCurrentPage('Discover Ghana');
    setGhanaCategory(category);
    window.scrollTo(0, 0);
  };
  
  const selectBlogPost = (post: BlogPost) => {
    setCurrentPage('Blog');
    setSelectedPost(post);
    window.scrollTo(0,0);
  };
  
  const backToBlog = () => {
    setSelectedPost(null);
    setCurrentPage('Blog');
    window.scrollTo(0, 0);
  };

  const backToGhana = () => {
    setGhanaCategory(null);
    setCurrentPage('Discover Ghana');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage === 'Discover Ghana' && ghanaCategory) {
      return <GhanaDetail category={ghanaCategory} goBack={backToGhana} />;
    }
    
    if (currentPage === 'Blog' && selectedPost) {
      return <BlogDetail post={selectedPost} goBack={backToBlog} />;
    }

    switch (currentPage) {
      case 'Home':
        return <Home navigate={navigate} />;
      case 'About Us':
        return <About />;
      case 'The Exchange Program':
        return <Program />;
      case 'Accommodation':
        return <Accommodation />;
      case 'Study at KAAF University':
        return <University />;
      case 'Discover Ghana':
        return <Ghana selectCategory={selectGhanaCategory} />;
      case 'Blog':
        return <Blog selectPost={selectBlogPost}/>;
      case 'FAQ':
        return <FAQ />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-stone-100 text-gray-800">
      <Header currentPage={currentPage} navigate={navigate} openSearch={openSearch} />
      <main>{renderPage()}</main>
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={closeSearch} 
        navigate={navigate} 
        selectBlogPost={selectBlogPost}
      />
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
