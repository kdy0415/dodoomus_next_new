import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

export default function business() {
    return (
        <Layout>
            <Head>
                <title>DODOOM Business - Building a Commerce Platform</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">Innovating the future together, <br/>realizing our value as partners</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>Building a commerce platform</span></Link>
                        <Link className="active" href="/business/kiosk"><span>Kiosk/ vending systems</span></Link>
                        <Link href="/business/smartad"><span>Smart Ads Vending Station</span></Link>
                        {/* <Link href="/business/blockchain"><span>블록체인 개발</span></Link> */}
                        <Link href="/business/service"><span>Services</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>Building a commerce platform</h4>
                        <p>We leverage our years of experience across a variety of platforms to create effective kiosk and vending systems. We combine innovative technology with practical design to provide a convenient and reliable user experience.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">Kiosk simplified shopping and advertising </div>
                            <div className="box_tit_sub">Kiosk Quick Shopping Strategy</div>
                            <p>Opening of kiosk billboards and shopping malls in local tourist attractions/restaurants as well as antenna shops in dense areas</p>
                            <p>Boost promotions to drive visitors to buy right away</p>
                            <p>Looking to expand to national ad channels in the future</p>
                            <p>Have relevant patents to expand your business <strong>(Kiosk Shopping Control System and Method , Ultralight NFC Authentication System and Method for mCoupon Services)</strong></p>
                            <div className="kiosk_cnt">
                                <div className="kiosk_image">
                                    <img src="/images/kiosk.jpg"/>
                                <div className="img_sub">&lt;Kiosk machine&gt;</div>
                                </div>
                                <div className="kiosk_detail">
                                    <div className="kiosk_area">
                                        <div className="title">&lt;A civic landmark/ dining spot&gt;</div>
                                        <div className="list">
                                            <div className="area">Aa1</div>
                                            <div className="area">Aa2</div>
                                            <div className="area">Ab1</div>
                                        </div>
                                    </div>
                                    <div className="kiosk_mall">
                                        <div className="title">&lt;A municipal mall&gt;</div>
                                        <div className="mall_cnt">
                                            <div className="mall">
                                                <div>Store Aa</div>
                                                <div>Store Aa</div>
                                            </div>
                                            <div className="options">
                                                <div><span>Manage products per kiosk</span></div>
                                                <div><span>Manage ads</span></div>
                                                <div><span>Manage orders</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="all">National Integration <br/>Expand your advertising solutions</div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">PharmacySmart Vending</div>
                            <div className="box_tit_sub">Advertising smart vending machines</div>
                            <p>Joint venture with Pharm24</p>
                            <p>Unlike traditional vending machines, the system is heavily advertised to maximize profitability (front rolling ads, side ads, etc.)</p>
                            <p>Operated in Korea as a pharmacy-only unattended vending machine</p>
                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img"><img src="/images/machine1.jpg"/></div>
                                    <div className="img"><img src="/images/machine2.jpg"/></div>
                                    <div className="img"><img src="/images/machine3.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;Smart vending machines for domestic pharmacies&gt;</div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">Contactless counseling vending machines</div>
                            <div className="box_tit_sub">The U.S. inserted an over-the-counter counseling system (permitted drug sales after pharmacist consultation)</div>
                            <p>Will be installed in airports, universities, factories, etc. (export in progress with Link Group International, Atlanta, USA)</p>
                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img lg"><img src="/images/machine4.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;Overseas contactless counseling smart vending machines&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
