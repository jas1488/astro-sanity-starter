import React from 'react';

const About = () => {
    return (
        <section className="about-section py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="about-content">
                        <h3 className="text-xl font-semibold mb-4">Your Trusted Partner in [Industry]</h3>
                        <p className="text-gray-700 mb-4">
                            Founded in [year], we've been committed to delivering excellence in [your services/products].
                            Our mission is to [company mission statement].
                        </p>
                        <p className="text-gray-700 mb-4">
                            With a team of dedicated professionals and years of industry experience,
                            we pride ourselves on [unique value proposition].
                        </p>
                    </div>

                    <div className="about-image">
                        <img
                            src="/path-to-your-image.jpg"
                            alt="About Our Company"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 