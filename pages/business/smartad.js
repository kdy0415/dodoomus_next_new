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
                        <Link href="/business/kiosk"><span>Kiosk/ vending systems</span></Link>
                        <Link className="active" href="/business/smartad"><span>Smart Ads Vending Station</span></Link>
                        {/* <Link href="/business/blockchain"><span>블록체인 개발</span></Link> */}
                        <Link href="/business/service"><span>Services</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>Smart Ads Vending Station</h4>
                        <p>DODOOM are implementing innovation and practical UI with our expertise in vending machine/kiosk design.<br/>
                        Our US partner DJCG is making progress with its smart advertising station in supermarkets.</p>
                    </div>

                    <div className="smartad_info">
                        <div class="smartad_logo"><img src="/images/djcg_logo.png"/></div>
                        <div class="txt1">DJ CONSULTING GROUP</div>
                        <div class="txt2">Advertising Sales Agencies Specializes in listing stocks in the U.S.</div>
                        <div class="txt3"><Link href="https://www.djcg.us" target="_blank">www.djcg.us</Link></div>
                    </div>
					<div className="smartad_cnt">
						<div className="img"><img src="/images/smart_ad_img.jpg"/></div>
						<div className="cnt">
							<div className="title">Partnering to bring smart ad stations(3D) to supermarkets</div>
							<div className="smart_checks">
								 <div className="item">Placed at the entrance of a leading supermarket</div>
								 <div className="item">Local business videos/images</div>
								 <div className="item">Posting different ads on 3 different sides</div>
								 <div className="item">Direct sales management by headquarters</div>
							</div>
							<div className="smart_dots">
								<div className="tit">“Investment Joint Venture Program” with licensed professionals.</div>
								<div className="item">Finding a professional installation location</div>
								<div className="item">View real-time sales information and payout amounts</div>
								<div className="item">Headquartered and managed directly</div>
								<div className="item">Stock Listing - Stock Option Plan</div>
							</div>
							<div className="contact">Contact Us : info@djcg.us</div>
						</div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
