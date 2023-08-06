import React, { useState } from 'react'

function Pricing() {
    const [ pricing, setPricing ] = useState('static')
  return (
    <div className='max-w-screen-xl m-auto block lg:grid grid-cols-2 gap-8'>
        <div className='px-8'>
            <h5 className='text-sm text-pink poppins tracking-widest font-semibold'>PRICING</h5>
            <h2 className='text-5xl text-grey font-black leading-normal'>My Pricing</h2>
        </div>
        <div className='bg-gradient-to-r from-dark-white to-white p-8 rounded-lg mt-24 lg:mt-0'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 poppins'>
                <div className='py-4 px-8 border text-center cursor-pointer' onClick={() => setPricing('static')}>STATIC</div>
                <div className='py-4 px-8 border text-center cursor-pointer' onClick={() => setPricing('standard')}>STANDARD</div>
                <div className='py-4 px-8 border text-center cursor-pointer' onClick={() => setPricing('premium')}>PREMIUM</div>
            </div>
            <div className='pr-8 poppins pb-4'>
            {pricing === 'static' ? <ul>
            <p className='mt-4'>Our Basic Package is perfect for individuals and small businesses looking to establish a simple online presence. We will create a clean and professional portfolio website that showcases your work and services. This package includes a responsive design, basic contact form, and integration with your social media profiles. You'll have up to 5 pages, such as Home, About, Services, Portfolio, and Contact.</p>
            <li className='font-bold mt-4 text-pink'>Hourly Rate: Web Developer: $20 - $40 per hour</li>

            <li className='font-bold mt-4 text-pink'>Project-Based Pricing:</li>
            <li>Basic Portfolio Website: $500 - $1,500</li>
            <li>Custom WordPress Site: $1,500 - $3,500</li>
            <li>E-commerce Website: $2,000 - $5,000</li>
            <li>Web Application: $3,000 - $10,000+</li>
            <li>Landing Page: $300 - $800</li>
            <li>Website Redesign: $800 - $2,000</li>
            <li>Maintenance & Updates: $50 - $150 per month</li>

            <li className='font-bold mt-4 text-pink'>Retainer Package (Monthly):</li>
            <li>Basic Package (2-5 hours/month): $100 - $250</li>

            <li className='font-bold mt-4 text-pink'>Additional Services (Priced Separately):</li>
            <li>Search Engine Optimization (SEO): $200 - $800 per month</li>
            <li>Content Creation: $50 - $150 per page</li>
            <li>Web Hosting & Domain Management: $10 - $50 per month</li>
            <li>Website Security & Maintenance: $50 - $200 per month</li>
            </ul> : pricing === 'standard' ? <ul>
            <p className='mt-4'>Our Standard Package is designed for businesses and professionals seeking a more comprehensive online presence. In addition to the features in the Basic Package, we will create a custom website with an admin panel that allows you to manage and update your content easily. You'll have up to 10 pages, including a blog section to engage your audience and improve your website's search engine rankings. We will also optimize your site for better performance and user experience.</p>
            <li className='font-bold mt-4 text-pink'>Hourly Rate: Web Developer: $40 - $75 per hour</li>

            <li className='font-bold mt-4 text-pink'>Project-Based Pricing:</li>
            <li>Basic Portfolio Website: $500 - $1,500</li>
            <li>Custom WordPress Site: $1,500 - $3,500</li>
            <li>E-commerce Website: $2,000 - $5,000</li>
            <li>Web Application: $3,000 - $10,000+</li>
            <li>Landing Page: $300 - $800</li>
            <li>Website Redesign: $800 - $2,000</li>
            <li>Maintenance & Updates: $50 - $150 per month</li>

            <li className='font-bold mt-4 text-pink'>Retainer Package (Monthly):</li>
            <li>Standard Package (6-10 hours/month): $250 - $500</li>

            <li className='font-bold mt-4 text-pink'>Additional Services (Priced Separately):</li>
            <li>Search Engine Optimization (SEO): $200 - $800 per month</li>
            <li>Content Creation: $50 - $150 per page</li>
            <li>Web Hosting & Domain Management: $10 - $50 per month</li>
            <li>Website Security & Maintenance: $50 - $200 per month</li>
            </ul> : pricing === 'premium' ? <ul>
            <p className='mt-4'> The Premium Package is the ultimate solution for businesses and organizations that require a robust and highly interactive web presence. In addition to all the features in the Standard Package, we will develop a fully functional e-commerce website with a secure payment gateway, product catalog, and shopping cart system. Custom web applications and integrations can be added to enhance your site's functionality and user experience. With up to 20 pages, you'll have ample space to showcase your products, services, and achievements.</p>
            <li className='font-bold mt-4 text-pink'>Hourly Rate: Web Developer: $75 - $150+ per hour</li>

            <li className='font-bold mt-4 text-pink'>Project-Based Pricing:</li>
            <li>Basic Portfolio Website: $500 - $1,500</li>
            <li>Custom WordPress Site: $1,500 - $3,500</li>
            <li>E-commerce Website: $2,000 - $5,000</li>
            <li>Web Application: $3,000 - $10,000+</li>
            <li>Landing Page: $300 - $800</li>
            <li>Website Redesign: $800 - $2,000</li>
            <li>Maintenance & Updates: $50 - $150 per month</li>

            <li className='font-bold mt-4 text-pink'>Retainer Package (Monthly):</li>
            <li>Premium Package (10+ hours/month): $500 - $1,000+</li>

            <li className='font-bold mt-4 text-pink'>Additional Services (Priced Separately):</li>
            <li>Search Engine Optimization (SEO): $200 - $800 per month</li>
            <li>Content Creation: $50 - $150 per page</li>
            <li>Web Hosting & Domain Management: $10 - $50 per month</li>
            <li>Website Security & Maintenance: $50 - $200 per month</li>
            </ul> : null }
        <button type="submit" className='bg-gradient-to-r from-dark-white to-white shadow-md hover:shadow-lg duration w-full border rounded-lg py-4 mt-6 poppins text-sm text-grey poppins tracking-widest font-semibold'>ORDER NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing