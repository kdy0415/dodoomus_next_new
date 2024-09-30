import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Axios from "axios";

import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);

export default function Home(props) {
  const items = props.data;
  return (
    <Layout>
      <Head>
      </Head>

      <div id="content">
        <span className="slogan">Keep it simple with value</span>

        <div className="main_business">
          <div className="container mf">
            <Swiper
              observer={true}
              observeParents={true}
              allowTouchMove={true}
              pagination={true}
              autoplay={{
                delay: 2000, // autoplay 간격 설정
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 640px
                750: {
                  allowTouchMove: true,

                }
              }}
            >
              <SwiperSlide>
                <Link href="/business/platform">
                  <div className="cnt">
                    <span className="num">01</span>
                    <span className="subject">Building a commerce platform</span>
                    <ul className="items">
                      <li>Shopping mall system</li>
                      <li>Closed Mall System</li>
                      <li>Food Distribution Management System</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/business/kiosk">
                  <div className="cnt">
                    <span className="num">02</span>
                    <span className="subject">Kiosk/vending machine systems</span>
                    <ul className="items">
                      <li>Ad-supported kiosks</li>
                      <li>Smart Pharmacy Vending Machines</li>
                      <li>Contactless counseling smart vending machine (export)</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              {/* <SwiperSlide>
              <Link href="/business/blockchain">
                  <div className="cnt">
                    <span className="num">03</span>
                    <span className="subject">블록체인 개발</span>
                    <ul className="items">
                      <li>블록체인기반 이커머스</li>
                      <li>블록체인 마켓플레이스</li>
                      <li>NFT 마켓플레이스</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/business/service">
                  <div className="cnt">
                    <span className="num">04</span>
                    <span className="subject">서비스</span>
                    <ul className="items">
                      <li>도서유통판매관리 시스템</li>
                      <li>대용량 선거인단 모집 및 투표시스템</li>
                      <li>QR플랫폼</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide> */}
              <SwiperSlide>
              <Link href="/business/smartad">
                  <div className="cnt">
                    <span className="num">03</span>
                    <span className="subject">Smart Ads Vending Station</span>
                    <ul className="items">
                      <li>a vending machine/kiosk</li>
                      <li>Smart Advertising Station</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="main_about">
          <div className="container">
            <h2 className="title_big">About</h2>
            <div className="main_about_cnt">
              <div className="about_title">Keep it simple <br/>with value<span></span></div>
              <div className="txt">
                <p>As described in Micro trend X by Mark J.Penn, trends, like viruses, spread when you least expect it and the impossible becomes possible.</p>
                <p>For that one moment when no one sees it coming, we put user experience at the center of everything we do and take a new direction.</p>
                <Link href="/about" className="view_more"><span>View More</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main_service">
          <div className="container">
            <h2 className="title_big">Service</h2>
            <div className="service_list">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  750: {
                    slidesPerView: 3
                  }
                }}
              >
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service1.jpg')`
                    }}
                  ></span>
                  <span className="subject">Membership mall/welfare mall solutions</span>
                  <span className="txt">Best choice for businesses with membership malls or employee benefit malls</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service2.jpg')`
                    }}
                  ></span>
                  <span className="subject">Ad-integrated shopping malls</span>
                  <span className="txt">Build an ad-supported mall that combines business and shopping to increase revenue</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service3.jpg')`
                    }}
                  ></span>
                  <span className="subject">Accommodation/ Experience Booking Solutions</span>
                  <span className="txt">One-stop booking management solution for stays and experiences</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service4.jpg')`
                    }}
                  ></span>
                  <span className="subject">Bookselling Distribution Solutions</span>
                  <span className="txt">The best partner for book distribution recognized by major Korean distributors</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service5.jpg')`
                    }}
                  ></span>
                  <span className="subject">Blockchain Voting Solutions</span>
                  <span className="txt">Blockchain-based high-volume online voting system increases trust</span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
