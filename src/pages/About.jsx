import React from "react";

function About() {
  return (
    <div className="container about-section">
      <h3 className="text-center mb-5 mt-3 section-title">ABOUT MBC</h3>

      {/* Mission and Vision Section */}
      <div className="content-section">
        <h4 className="subsection-title">Mission and Vision</h4>
        <p>
          Our mission at ItsMBC.com is to close the digital literacy gap and
          empower underserved communities with the resources, knowledge, and
          tools to succeed in a digital world. We envision a future where
          everyone, regardless of their background or location, has equal access
          to media and technology. Through accessible educational programs and
          impactful media, we strive to foster community growth, digital
          inclusion, and lifelong learning opportunities.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="content-section">
        <h4 className="subsection-title">Our Team</h4>
        <p>
          The team at ItsMBC.com is composed of media experts, educators,
          designers, and community leaders who are deeply committed to our
          mission. Each member brings a unique skill set, from broadcasting and
          content creation to digital marketing and community outreach. Our
          collective experience enables us to develop meaningful media content
          that resonates with our audience and supports local communities. We
          take pride in fostering a collaborative and creative work environment
          where ideas flourish, and each team member’s contributions are valued.
        </p>
      </div>

      {/* History and Background Section */}
      <div className="content-section">
        <h4 className="subsection-title">History and Background</h4>
        <p>
          Founded as the TV & Radio Network of Mack Lab Media Group, ItsMBC.com
          was born out of a need to bridge the digital divide in Northern
          California. Starting with local television shows and radio segments,
          we expanded our services to include graphic design, printing, and
          merchandise as we recognized the demand for comprehensive media
          support in the community. Over the years, ItsMBC.com has evolved to
          become a digital hub that not only broadcasts media but also serves as
          a platform for community voices and civic engagement.
        </p>
      </div>

      {/* Community Impact Section */}
      <div className="content-section">
        <h4 className="subsection-title">Community Impact</h4>
        <p>
          Our work has significantly impacted local communities across Northern
          California, especially in underserved areas like Stockton and
          Modesto. Through educational television and radio programs, digital
          literacy workshops, and collaborative projects, ItsMBC.com has helped
          countless individuals develop essential skills. Our community impact
          extends beyond just education; we provide a platform for local leaders,
          educators, and influencers to connect directly with the people, 
          fostering a sense of unity and mutual growth.
        </p>
        <p>
          Our partnerships with nonprofits, local schools, and community
          organizations have amplified our reach, enabling us to support digital
          learning initiatives for all ages. We are especially proud of our role
          in providing media exposure for small businesses and local talents,
          helping to create economic opportunities and cultural appreciation
          throughout the region.
        </p>
      </div>

      {/* Overall Mission Statement */}
      <p className="mb-5 mt-4">
        ItsMBC.com remains dedicated to bridging the gap between technology and
        community, building an inclusive media landscape that uplifts all voices
        and inspires positive change. By uniting media, innovation, and civic
        engagement, we continue to support California’s diverse communities in
        adapting to and excelling in a digital future.
      </p>
    </div>
  );
}

export default About;
