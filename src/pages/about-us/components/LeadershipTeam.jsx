import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipTeam = () => {
  const leaders = [
    {
      id: 1,
      name: "Rajesh Kumar Sharma",
      position: "Founder & Chairman",
      experience: "30+ Years",
      education: "B.Tech Chemical Engineering, IIT Delhi",
      bio: "Visionary leader who transformed Rocket PVC from a startup to India\'s leading PVC manufacturer. Pioneer in sustainable manufacturing practices.",
      achievements: [
        "Industry Excellence Award 2022",
        "Sustainability Leadership Recognition",
        "Export Excellence Award"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "rajesh.sharma@rocketpvc.com"
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Managing Director",
      experience: "25+ Years",
      education: "MBA Operations, IIM Ahmedabad",
      bio: "Strategic operations expert driving digital transformation and quality excellence across all manufacturing facilities.",
      achievements: [
        "Operations Excellence Award",
        "Women Leadership Recognition",
        "Quality Management Certification"
      ],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "priya.mehta@rocketpvc.com"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      position: "Chief Technology Officer",
      experience: "20+ Years",
      education: "PhD Materials Science, IISc Bangalore",
      bio: "Innovation leader spearheading R&D initiatives and advanced manufacturing technologies for next-generation PVC products.",
      achievements: [
        "Technology Innovation Award",
        "15+ Patents Filed",
        "Research Excellence Recognition"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "amit.patel@rocketpvc.com"
    },
    {
      id: 4,
      name: "Sunita Agarwal",
      position: "Chief Financial Officer",
      experience: "22+ Years",
      education: "CA, CFA, MBA Finance",
      bio: "Financial strategist ensuring sustainable growth and investment in cutting-edge manufacturing technologies and market expansion.",
      achievements: [
        "CFO of the Year 2023",
        "Financial Excellence Award",
        "Corporate Governance Recognition"
      ],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sunita.agarwal@rocketpvc.com"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Leadership Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meet the visionary leaders driving Rocket PVC's commitment to innovation, 
            quality, and sustainable manufacturing practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {leaders?.map((leader, index) => (
            <div 
              key={leader?.id}
              className="bg-surface rounded-2xl p-8 hover:shadow-industrial-lg precision-transition group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden">
                    <Image 
                      src={leader?.image}
                      alt={leader?.name}
                      className="w-full h-full object-cover group-hover:scale-110 precision-transition"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-conversion-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{leader?.name}</h3>
                    <p className="text-industrial-green font-semibold mb-2">{leader?.position}</p>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={16} />
                        <span>{leader?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="GraduationCap" size={16} />
                        <span>Advanced Degree</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {leader?.bio}
                  </p>

                  {/* Education */}
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="BookOpen" size={16} className="text-industrial-green" />
                      <span className="font-semibold text-primary">Education</span>
                    </div>
                    <p className="text-sm text-text-secondary">{leader?.education}</p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Trophy" size={16} className="text-conversion-accent" />
                      <span className="font-semibold text-primary">Key Achievements</span>
                    </div>
                    <div className="space-y-2">
                      {leader?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-conversion-accent rounded-full"></div>
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <a 
                      href={leader?.linkedin}
                      className="flex items-center space-x-2 text-industrial-green hover:text-conversion-accent precision-transition"
                    >
                      <Icon name="Linkedin" size={16} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a 
                      href={`mailto:${leader?.email}`}
                      className="flex items-center space-x-2 text-industrial-green hover:text-conversion-accent precision-transition"
                    >
                      <Icon name="Mail" size={16} />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-industrial-green to-conversion-accent rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h3>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              "We believe in leading by example, fostering innovation, and building a sustainable future 
              for the PVC manufacturing industry. Our commitment to excellence drives every decision, 
              ensuring that Rocket PVC remains at the forefront of quality and environmental responsibility."
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Vision-Driven</h4>
                <p className="text-sm text-white/80">Strategic thinking for long-term success</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">People-First</h4>
                <p className="text-sm text-white/80">Empowering teams and communities</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Innovation-Focused</h4>
                <p className="text-sm text-white/80">Continuous improvement and growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;