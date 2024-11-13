import React from "react";
import "./community.css"

// Local Partnerships Section
const LocalPartnerships = () => (
    <section className="container py-5 local-partnerships">
      <h2 className="text-center mb-5 section-title">Local Partnerships</h2>
      <p className="section-description">
        Our local partnerships have been instrumental in fostering community
        development. By collaborating with local businesses and organizations,
        we are able to provide mutual support and contribute to the growth of the
        area.
      </p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="partnership-card shadow">
            <h5>Business Collaboration</h5>
            <p>
              We believe in building strong relationships with local businesses to
              create opportunities that benefit both sides. Our collaborative
              approach ensures sustainable growth and a lasting impact.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="partnership-card shadow">
            <h5>Nonprofit Engagement</h5>
            <p>
              We actively engage with local nonprofits to strengthen their
              initiatives and contribute resources that help further their mission
              in the community.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
  
  // Resources for Nonprofits and Local Businesses Section
  const ResourcesSection = () => (
    <section className="container py-5 resources-section">
      <h2 className="text-center mb-5 section-title">Resources for Nonprofits and Local Businesses</h2>
      <p className="section-description">
        We provide various resources to support local nonprofits and small
        businesses. Whether you're looking for grants, marketing support, or
        networking opportunities, we are here to help.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="resource-card shadow">
            <h5>Grants and Funding</h5>
            <p>
              Learn about available grants and funding opportunities that can help
              you take your initiatives to the next level.
            </p>
            <button className="btn btn-secondary">Explore</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="resource-card shadow">
            <h5>Networking Opportunities</h5>
            <p>
              Our community programs foster networking and connection-building,
              helping you grow your business or nonprofit in meaningful ways.
            </p>
            <button className="btn btn-secondary">Join Us</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="resource-card shadow">
            <h5>Marketing Support</h5>
            <p>
              From social media promotions to website enhancements, we provide
              marketing tools and expertise to elevate your efforts.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
  

// Main Page Component
const CommunitySuccess = () => (
  <div className="community-success">
    <header className="text-center py-5 bg-secondary text-white header">
      <h1>Community Success Stories</h1>
      <p>Celebrating our local partnerships and resources for growth</p>
    </header>

    {/* Local Partnerships Section */}
    <LocalPartnerships />

    {/* Resources Section */}
    <ResourcesSection />
  </div>
);

export default CommunitySuccess;
