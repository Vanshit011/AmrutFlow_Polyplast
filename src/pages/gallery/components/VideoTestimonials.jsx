import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Project Manager",
      company: "Metro Construction Ltd.",
      thumbnail: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      videoUrl: "https://example.com/video1.mp4",
      quote: "Rocket PVC\'s products have been instrumental in our major infrastructure projects. The quality and reliability are unmatched.",
      project: "Delhi Metro Phase 4",
      rating: 5,
      duration: "2:45"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Engineer",
      company: "Green Building Solutions",
      thumbnail: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
      videoUrl: "https://example.com/video2.mp4",
      quote: "Their commitment to sustainability and eco-friendly manufacturing aligns perfectly with our green building initiatives.",
      project: "Eco-Smart Residential Complex",
      rating: 5,
      duration: "3:12"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Procurement Head",
      company: "Industrial Infrastructure Corp",
      thumbnail: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      videoUrl: "https://example.com/video3.mp4",
      quote: "The precision and consistency of Rocket PVC products have significantly reduced our project timelines and costs.",
      project: "Chemical Plant Expansion",
      rating: 5,
      duration: "1:58"
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      position: "Technical Director",
      company: "Water Management Systems",
      thumbnail: "https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg",
      videoUrl: "https://example.com/video4.mp4",
      quote: "Their innovative approach to water management solutions has revolutionized our municipal projects.",
      project: "Smart City Water Infrastructure",
      rating: 5,
      duration: "4:23"
    }
  ];

  const openVideo = (testimonial) => {
    setSelectedVideo(testimonial);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
                <Icon name="Video" size={24} className="text-white" />
              </div>
              <span className="text-conversion-accent font-semibold text-lg">Client Stories</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear directly from our clients about their experience working with Rocket PVC
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="group relative bg-white rounded-xl overflow-hidden industrial-shadow precision-transition hover:shadow-industrial-lg cursor-pointer"
                onClick={() => openVideo(testimonial)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={testimonial?.thumbnail}
                    alt={`${testimonial?.name} testimonial`}
                    className="w-full h-full object-cover precision-transition group-hover:scale-105"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 precision-transition">
                    <div className="w-16 h-16 bg-conversion-accent rounded-full flex items-center justify-center shadow-lg">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                      {testimonial?.duration}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-black/70 rounded">
                      {Array.from({ length: testimonial?.rating })?.map((_, idx) => (
                        <Icon key={idx} name="Star" size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="font-semibold text-primary mb-1">
                      {testimonial?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.position}
                    </p>
                    <p className="text-sm text-industrial-green font-medium">
                      {testimonial?.company}
                    </p>
                  </div>

                  <blockquote className="text-sm text-text-secondary mb-3 line-clamp-3">
                    "{testimonial?.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Building2" size={14} className="text-text-secondary" />
                      <span className="text-xs text-text-secondary">
                        {testimonial?.project}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Play" size={12} className="text-conversion-accent" />
                      <span className="text-xs text-conversion-accent font-medium">
                        Watch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-surface rounded-2xl p-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                  Share Your Experience
                </h3>
                <p className="text-text-secondary mb-6">
                  Have you worked with Rocket PVC? We'd love to hear about your project and share your success story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-conversion-accent text-white rounded-lg precision-transition hover:bg-conversion-accent/90">
                    <Icon name="Video" size={16} />
                    <span className="font-medium">Submit Testimonial</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-border rounded-lg precision-transition hover:bg-surface">
                    <Icon name="MessageCircle" size={16} />
                    <span className="font-medium">Write Review</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-white/30"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Video Container */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video Player Placeholder</p>
                  <p className="text-sm opacity-75">
                    {selectedVideo?.name} - {selectedVideo?.duration}
                  </p>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {selectedVideo?.name}
                    </h3>
                    <p className="text-text-secondary">
                      {selectedVideo?.position} at {selectedVideo?.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: selectedVideo?.rating })?.map((_, idx) => (
                      <Icon key={idx} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-text-secondary mb-4 italic">
                  "{selectedVideo?.quote}"
                </blockquote>

                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building2" size={14} />
                    <span>Project: {selectedVideo?.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>Duration: {selectedVideo?.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;