import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

export default function business() {
    return (
        <Layout>
            <Head>
                <title>DODOOM Business - Service</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">Innovating the future together, <br/>realizing our value as partners</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>Building a commerce platform</span></Link>
                        <Link href="/business/kiosk"><span>Kiosk/ vending systems</span></Link>
                        <Link href="/business/smartad"><span>Smart Ads Vending Station</span></Link>
                        {/* <Link href="/business/blockchain"><span>블록체인 개발</span></Link> */}
                        <Link className="active" href="/business/service"><span>Services</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>Services</h4>
                        <p>Manage book distribution and sales, recruit and vote in large populations, and seamlessly connect online and offline with QR platforms.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">(Book) Distribution Sales Management System</div>
                            <div className="box_tit_sub">Modernize existing systems and expand to cloud services as SaaS</div>
                            <p>It is currently utilized in the whole book distribution market such as &apos;Sungwoo&apos;, &apos;Dasan Books&apos;, &apos;Genius Education&apos;, and &apos;Kids First&apos; and is the first priority when new whole books appear.</p>
                            <p>ERP solution for book distribution specialized in order management</p>
                            <p>Developing the transition from individual supply management to cloud-based services</p>
                            <p>Provide separate DB space for each vendor</p>

                            <div className="boxtext_list">
                                <div className="list mb_row item_inline">
                                    <div className="item">
                                        <div className="tit">Key Features</div>
                                        <div className="cnt">
                                            <span>· Manage administrators</span>
                                            <span>· Manage Publishers</span>
                                            <span>· Product Management</span>
                                            <span className="color">· Store management</span>
                                            <span className="color">· Manage orders</span>
                                            <span>· Happy Call Management</span>
                                            <span>· Revenue management</span>
                                            <span>· Prepayment management</span>
                                            <span>· Manage statistics</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">· Manage your store</div>
                                        <div className="cnt">
                                            <span>· Bulk membership registration</span>
                                            <span>· Setting up a store code (supports bulk registrations)</span>
                                            <span>· Manage store ratings</span>
                                            <span>· Setting up easements</span>
                                            <span>· Organization Management (Parent/Subordinate)</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">· Managing orders</div>
                                        <div className="cnt">
                                            <span>· Duplicate Order Management</span>
                                            <span>· Same Cancel History Management</span>
                                            <span>· Easement violation order management</span>
                                            <span>· Shipping management (box registration matching)</span>
                                            <span>· Shipment management Invoice check APP provided</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">High-volume voter recruitment and voting systems</div>
                            <div className="box_tit_sub">Voting/survey pole systems for high volume voter recruitment and voting systems</div>
                            <p>Recruiting voters based on identity</p>
                            <p>Stable, high-capacity voting system (covering more than 2,000 people per second), with a blockchain system in the future</p>
                            <p>Develop a voting system for small civilian audiences (reward system can be advanced)</p>

                            <div className="boxtext_list">
                                <div className="list mb_row arrow_items">
                                    <div className="group">
                                        <div className="item">
                                            <div className="tit">Recruit voters</div>
                                            <div className="cnt">
                                                <span>· Send a ReminderTalk</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="tit">Register to vote</div>
                                            <div className="cnt">
                                                <span>· Bulk uploads</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Appeals/Corrections</div>
                                        <div className="cnt">
                                            <span>· Authenticate yourself</span>
                                            <span>· Mobile phone authentication</span>
                                            <span>· Email authentication</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">Run polls</div>
                                        <div className="cnt">
                                            <span>· Send a ReminderTalk</span>
                                            <span>· Send a non-voter reminder text</span>
                                            <span>· Authenticate yourself</span>
                                            <span>· Mobile phone authentication</span>
                                            <span>· Email authentication</span>
                                            <span>· Optional</span>
                                            <span>· Multiselect</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Open voting results</div>
                                        <div className="cnt">
                                            <span>· Specify a vote count date</span>
                                            <span>· Identify the person in charge</span>
                                            <span>· Generate a tally password</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">A QR platform that connects online and offline</div>
                            <div className="box_tit_sub">Easily and powerfully connect QR with your business.</div>
                            <p>Dynamic QR Code generation/ Search tracking and analytics</p>
                            <p>Bulk download of high-resolution QR codes to support/output mobile-optimized page creation</p>

                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img"><img src="/images/isqr1.jpg"/></div>
                                    <div className="img"><img src="/images/isqr2.jpg"/></div>
                                    <div className="img"><img src="/images/isqr3.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;ISQR Website&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
