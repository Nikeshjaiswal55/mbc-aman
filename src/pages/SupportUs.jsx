import React from "react";

function SupportUs() {
  return (
    <div className="container support-section">
      <h2 className="text-center mb-5 mt-3 section-title">Support Us</h2>

      {/* Donation Section */}
      <div className="content-section mb-5">
        <h3 className="subsection-title">Donate to ItsMBC Programs</h3>
        <p>
          Your generous contributions help us sustain and expand ItsMBC.com's
          programs that bridge the digital divide in underserved communities. By
          donating, you’re directly supporting educational media content,
          digital literacy workshops, and community outreach efforts that create
          lasting impact. Every dollar goes toward our mission of digital
          inclusion, and no donation is too small.
        </p>
        <div className="donation-options">
          <p className="mb-3"><strong>Select a Donation Amount:</strong></p>
          <button className="btn btn-secondary m-2">$10</button>
          <button className="btn btn-secondary m-2">$25</button>
          <button className="btn btn-secondary m-2">$50</button>
          <button className="btn btn-secondary m-2">$100</button>
          <button className="btn btn-secondary m-2">Other</button>
        </div>
        <p className="mt-4">
          <a href="/donate" className="btn btn-outline-secondary">
            Go to Donation Page
          </a>
        </p>
      </div>

      {/* Volunteer Section */}
      <div className="content-section">
        <h3 className="subsection-title">Volunteer Opportunities</h3>
        <p>
          Join us in making a difference by volunteering with ItsMBC.com! We
          have numerous opportunities available for those passionate about media
          education, community engagement, and digital literacy. Whether you
          have a background in media, tech, education, or simply a passion for
          helping others, we welcome your support.
        </p>
        <p>
          Volunteering with us provides hands-on experience in media and
          technology fields, while contributing to meaningful change in local
          communities. Together, we can make a significant impact in closing the
          digital gap.
        </p>
        <div className="volunteer-cta">
          <p className="mt-4">
            <a href="/volunteer" className="btn btn-outline-secondary">
              See Volunteer Opportunities
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportUs;
