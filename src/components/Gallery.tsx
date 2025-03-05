import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Modern Living Room',
    description: 'Complete interior painting with custom accent wall',
    location: 'San Francisco, CA'
  },
  {
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Office Space Renovation',
    description: 'Full commercial repaint with brand color matching',
    location: 'Seattle, WA'
  },
  {
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Suburban Home Exterior',
    description: 'Complete exterior repaint with trim detail work',
    location: 'Portland, OR'
  },
  {
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Kitchen Cabinet Refinishing',
    description: 'Custom cabinet painting with premium finishes',
    location: 'Denver, CO'
  },
  {
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Master Bedroom Suite',
    description: 'Elegant color scheme with accent ceiling',
    location: 'Chicago, IL'
  },
  {
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'Restaurant Interior',
    description: 'Vibrant commercial space with custom murals',
    location: 'Austin, TX'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const nextImage = () => {
    const currentIndex = projects.findIndex(project => project === selectedImage);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedImage(projects[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = projects.findIndex(project => project === selectedImage);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedImage(projects[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects showcasing our quality and versatility.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => setSelectedImage(project)}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{project.location}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{project.category}</span>
                  <span className="text-gray-400 text-sm">View Project</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full h-auto rounded-t-lg"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{selectedImage.category}</span>
                <span className="text-gray-500">{selectedImage.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;