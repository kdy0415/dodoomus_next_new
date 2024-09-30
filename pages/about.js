import Layout from "../components/layout";
import Head from "next/head";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About DODOOM</title>
            </Head>
            <div id="content" className="mgt0">
                <div className="about_visual">
                    <div className="container">
                        <h2 className="page_group">About</h2>
                        <div className="about_txt">
                            <h3 className="about_title">Keep it simple with value<span></span></h3>
                            <div className="txt">
                                <p>As depicted in Micro trend X by Mark J.Penn,
                                    trends, like viruses, spread when you least expect it.
                                    the impossible becomes possible</p>
                                <p>For that one moment no one could have predicted, we put user
                                    experience as our core value, we take a new direction</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about_dodoom">
                        <span className="txt1">Dodoom is</span>
                        <div className="txt_wrap">
                            <div className="title">We are a user-centered <strong><span>Community Group</span></strong> that understands emotions through new thoughts and actions.</div>
                            <p>Discovering human-centered values in the midst of the rapidly changing paradigm in the digital world and providing digital experiences that make the essence stand out through various perspectives and strategies is the core value that we believe in.</p>
                        </div>
                    </div>

                    <div className="about_wwd">
                        <div className="about_stitle">What we do</div>
                        <ul className="wwd_list">
                            <li>
                                <span className="tit">Membership mall/ welfare mall solutions</span>
                                <span className="cnt">Best choice for businesses with membership malls or employee benefit malls</span>
                            </li>
                            <li>
                                <span className="tit">Ad-integrated shopping malls</span>
                                <span className="cnt">Build an ad-supported mall that combines business and shopping to increase revenue</span>
                            </li>
                            <li>
                                <span className="tit">Accommodation/ Experience Booking Solutions</span>
                                <span className="cnt">One-stop booking management solution for stays and experiences</span>
                            </li>
                            <li>
                                <span className="tit">Bookselling Distribution Solutions</span>
                                <span className="cnt">The best partner for book distribution recognized by major Korean distributors</span>
                            </li>
                            <li>
                                <span className="tit">Blockchain voting solutions</span>
                                <span className="cnt">Blockchain-based high-volume online voting system increases trust</span>
                            </li>
                        </ul>
                    </div>

                    <div className="about_tng">
                        <div className="about_stitle">Technology</div>
                        <div className="tng_list">
                        <Swiper
                        slidesPerView={'auto'}
                        >
                        <SwiperSlide><Image src="/images/technologyimg1.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg2.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg3.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg4.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg5.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg6.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg7.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg8.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </Layout >
    )
}

About.headerStyle = 'header_white'
