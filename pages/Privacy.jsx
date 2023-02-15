import React from 'react'

const Privacy = () => {
  return (
    <div className='w-full h-full'>
        <div className='bg-[#5BDADD] w-full px-4 h-[10%] lg:px-80 py-8 my-8'>
            <h1 className='text-2xl font-bold'>Privacy Policy</h1>
        </div>
        <div className='lg:mx-80 md:mx-20 mx-4 md:ml-4 flex flex-col  mt-16'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <span className='w-10 text-lg font-bold h-10 bg-[#5BDADD] rounded-full flex items-center justify-center'>
                        1
                    </span>
                    <h2 className='ml-10 text-xl font-bold'>Privacy Statement</h2>
                </div>
                <p className='ml-20 mt-8'>
                    Play Zuri Health Limited and its affiliates (“Zuri Health”) value the privacy of individuals who access our Sites and use our Services.

                    <br />
                    <br />

                    This Privacy Policy describes the Personal Data that Zuri Health collects, how Zuri Health collects, uses, and shares the Personal Data, and which ways in which you can control how we use and share your Personal Data. It informs you what information the Healthcare Professionals or other members can see when you use our Sites and Services. It informs you of your rights and choices with respect to your Personal Data and how you can contact us should you have any questions or concerns.
                    
                    <br />
                    <br />

                    ZURI HEALTH SITES WILL BE COLLECTING AND TRANSMITTING PERSONAL, MEDICAL AND HEALTH-RELATED DATA ABOUT YOU. BY USING THE SITE, YOU GIVE CONSENT THAT WE CAN COLLECT AND USE YOUR PERSONAL AND OTHER DATA AS DESCRIBED IN THIS SITE’S PRIVACY POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE. YOU HAVE THE RIGHT TO WITHDRAW YOUR CONSENT AT ANY TIME, PROVIDED THAT WE DO NOT HAVE ANOTHER LEGAL BASIS TO KEEP PROCESSING YOUR PERSONAL DATA.
                </p>
            </div>

            <div className='flex flex-col my-20'>
                <div className='flex flex-row items-center'>
                    <span className='w-10 text-lg font-bold h-10 bg-[#5BDADD] rounded-full flex items-center justify-center'>
                        2
                    </span>
                    <h2 className='ml-10 text-xl font-bold'>Important Definitions</h2>
                </div>
                <p className='ml-20 mt-8'>
                    “Personal Data” in this Privacy Policy, means Data about you that is personally identifiable to you, such as your contact information (e.g., name, address, email address, or telephone number), personally identifiable health or medical Data (“Health Data”), and any other non-public Data that is associated with such Data.

                    <br />
                    <br />

                    “De-Identified Data”, means Data that is neither used nor intended to be used to personally identify an individual.
                </p>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <span className='w-10 text-lg font-bold h-10 bg-[#5BDADD] rounded-full flex items-center justify-center'>
                        3
                    </span>
                    <h2 className='ml-10 text-xl font-bold'>Data We Receive or Collect from You</h2>
                </div>
                <p className='ml-20 mt-8'>
                    Registration Data: When you register or create an account, you provide us with certain information, which includes your email address, telephone number, date of birth, gender, and zip or postal code (the “Registration Data”), as well as a password for your account.

                    <br />
                    <br />

                    Payment Information: If you choose to use a fee-based Service, you will be requested to provide (at a minimum) your name and payment information including payment card information (“Payment Information“). A third-party service provider that handles payments for us will also receive your payment card information.
                    
                    <br />
                    <br />

                    Data You Choose to Provide to Us: You have the ability to provide a variety of Data during your interactions with us and the Zuri Health Services, such as emails you may send us, information you respond to, and emails or newsletters that you sign up to receive. Zuri Health or third parties acting on our behalf receive data from you whenever you provide us with Data.
                    
                    <br />
                    <br />

                    Contact Data: If you choose to participate in research studies, or sign up for certain features, you may provide us, and we may collect, your contact Data, including your name, mailing address, and phone number (“Contact Data”).
                    
                    <br />
                    <br />

                    Feedback and Support. We love to hear from you. Whether you have an idea to make Zuri Health better or need help, we store the emails you send us and use them to help us prioritize how to improve our product.

                    <br />
                    <br />
                    
                    De-identified Data. We use de-identified data for research and development of new products or tools, to refine our algorithms and machine learning applications, and to improve the App and the services we provide. We may disclose such Data publicly and to third parties, for example, in public reports about health, to partners under agreement with us, or in benchmarking Data we provide to the medical community.
 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Privacy