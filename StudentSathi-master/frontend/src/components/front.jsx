import user1 from './Pictures/user1.jpg';
import user2 from './Pictures/user2.jpg';
import user3 from './Pictures/user3.jpeg';
import user4 from './Pictures/user4.jpeg';
import user5 from './Pictures/user5.jpeg';
import SearchBar from './search/SearchBar';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import ChatBot from 'react-simple-chatbot';

function generateResponse(input) {
    const keywordsResponses = [
        { keyword: 'university', response: 'Please go to sign up and create your account to access the university tab. There are almost all the universities listed there according to location and ranking. Happy surfing!' },
        { keyword: 'courses', response: 'We would be glad to help you find courses which suit your dreams and ambitions. Please head to the courses tab for information about the different courses in different fields.' },
        { keyword: 'career', response: 'Your career depends on your hard work, but don\'t worry, Student Sathi will help you explore different possibilities of acing your life through insights of all the courses available.' },
    ];

    const foundKeyword = keywordsResponses.find(item => input.toLowerCase().includes(item.keyword));
    if (foundKeyword) {
        return foundKeyword.response;
    } else {
        return 'Please head to the contact page, and the team will reach you within 24 hours.';
    }
};


function Front() {

    const [end, setEnd] = useState(false);

    const handleEnd = ({ steps, values }) => {
        setEnd(true);
    };

    const handleReset = () => {
        setEnd(false);
    };


    return (
        <>
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'What is your name?',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}, welcome to student sathi website!',
                        trigger: '4'
                    },
                    {
                        id: '4',
                        message: 'How can i help you?',
                        trigger: '5'
                    },
                    {
                        id: '5',
                        user: true,
                        trigger: 'checkResponse'
                    },
                    {
                        id: 'checkResponse',
                        message: ({ previousValue }) => generateResponse(previousValue),
                        end: true,
                    },
                ]}
                handleEnd={handleEnd}
                handleReset={handleReset}
                hideSubmitButton={end}
                floating={true}
            />
                <div className="frontpage">
                    <section className="first-sec">


                        <div className="tagline">
                        <h1>Your path to the perfect fit</h1>
            <p>Welcome to StudentSathi, your one-stop destination for finding the perfect college match. Explore institutions, receive personalized recommendations, 
                and access expert advice to guide you towards your dream education.</p>
                <a href="/Course">
                    <button className="frontBtn">Explore more</button>
                </a>
                        </div>



                    </section>
                </div>
                <div className="container">
                    <h1 className="heading">Testimonials</h1>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                            <img src={user2} alt="user_image" />
                            <div className='user-name'>
                                <p>Amar Thapa</p>
                            </div>
                            <div className='testi-text'>
                                <p>"Thanks to Student Sathi, I discovered my dream college with ease! Their intuitive platform and tailored support made the journey exciting and stress-free."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={user1} alt="user_image" />
                            <div className='user-name'>
                                <p>Rosina Gurung</p>
                            </div>
                            <div className='testi-text'>
                                <p>"Student Sathi's personalized approach made all the difference in my college search. Within moments, I found the perfect fit for my aspirations and goals."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={user5} alt="user_image" />
                            <div className='user-name'>
                                <p>Madhav Bansal</p>
                            </div>
                            <div className='testi-text'>
                                <p>"Student Sathi exceeded my expectations in finding the ideal college match. Their platform's efficiency and expert guidance made the process smooth and enjoyable."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={user3} alt="user_image" />
                            <div className='user-name'>
                                <p>Gopal shah</p>
                            </div>
                            <div className='testi-text'>
                                <p>"Discovering Student Sathi was a game-changer! Their user-friendly interface and personalized recommendations led me straight to my dream college."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={user4} alt="user_image" />
                            <div className='user-name'>
                                <p>riya stha</p>
                            </div>
                            <div className='testi-text'>
                                <p>"Student Sathi turned my college dreams into reality! Their dedication and support made the search process a breeze, guiding me towards a brighter future."</p>
                            </div>
                        </SwiperSlide>

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
                <section className="footer">
                    <h2>About Us</h2>
                    <p> Explore our rich history, values, and dedication to cultivating a community where innovation, diversity, and academic excellence thrive.</p>
                    <div className="icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </section>




        </>
    )
}
export default Front;