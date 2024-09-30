import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';

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
                        <Link className="active" href="/business/platform"><span>Building a commerce platform</span></Link>
                        <Link href="/business/kiosk"><span>Kiosk/ vending systems</span></Link>
                        <Link href="/business/smartad"><span>Smart Ads Vending Station</span></Link>
                        {/* <Link href="/business/blockchain"><span>블록체인 개발</span></Link> */}
                        <Link href="/business/service"><span>Services</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>Building a commerce platform</h4>
                        <p>Dodoom has been creating various platforms centered on shopping functions for a long time. We provide high-performing e-commerce platforms by reflecting internal know-how and trends.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">Shopping mall</div>
                            <div className="box_tit_sub">A standalone shopping system that evolves with your business</div>
                            <p>Independent shopping base, free to integrate with other advertisers<br/>
                            Enables continuous development based on an open development environment to support the expansion of your own unique business</p>
                            <div className="boxtext_list">
                                <div className="title">User features</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">Sign up</div>
                                        <div className="cnt">
                                            <span>Membership mall/open mall</span>
                                            <span>Member/Nonmember</span>
                                            <span>Support for easy signup</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Merchandising</div>
                                        <div className="cnt">
                                            <span>Mobile First</span>
                                            <span>Search function</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Purchase</div>
                                        <div className="cnt">
                                            <span>Cart</span>
                                            <span>Develop the PG you want</span>
                                            <span>Bundling by source</span>
                                            <span>Shipping discounts</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">My Page</div>
                                        <div className="cnt">
                                            <span>Edit your membership information</span>
                                            <span>Shipping information</span>
                                            <span>Canceling an order</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">Integrations</div>
                                        <div className="cnt">
                                            <span>Connecting with external services</span>
                                            <span>SSO development</span>
                                            <span>CSP Ad Integration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="boxtext_list">
                                <div className="title">Admin features</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">Product Management</div>
                                        <div className="cnt">
                                            <span>Setting up categories</span>
                                            <span>Special exhibitions</span>
                                            <span>Merchandising</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Manage Members</div>
                                        <div className="cnt">
                                            <span>Membership information encryption</span>
                                            <span>Dormant members</span>
                                            <span>Manage points</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Manage orders</div>
                                        <div className="cnt">
                                            <span>Order Status Management</span>
                                            <span>Uploading bulk orders</span>
                                            <span>Uploading invoices</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">Vendor management</div>
                                        <div className="cnt">
                                            <span>Manage commodity suppliers</span>
                                            <span>Multiple contacts per vendor</span>
                                            <span>Administrative support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">Closed Mall System</div>
                            <div className="box_tit_sub">Leased B2B/E Shopping System</div>
                            <p>A leased shopping mall system for vendors who want to offer a separate shopping mall from the general public.</p>
                            <p>Support for member management, product management, order management, message management, and payment management</p>

                            <div className="b2be_system">
                                <div className="mall">
                                    <span className="tit">Shopping mall</span>
                                    <span className="tit">Shopping mall</span>
                                    <span className="tit">Shopping mall</span>
                                </div>
                                <div className="cc">
                                    <span className="tit">Customers</span>
                                    <div className="options">
                                        <span className="color">Manage Shopping Mall Sales</span>
                                        <span className="color">Vendor management</span>
                                        <span>Product Management</span>
                                        <span>Manage orders</span>
                                        <span>Design Management</span>
                                        <span>Manage settlements</span>
                                        <span>Manage messages</span>
                                    </div>
                                </div>
                                <div className="sc">
                                    <div className="tit">
                                        <span>Vendors</span>
                                        <span>Vendors</span>
                                        <span>Vendors</span>
                                    </div>
                                    <div className="options">
                                        <span>Manage contacts</span>
                                        <span>Product Management</span>
                                        <span>Manage orders</span>
                                        <span>Manage Q&A</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">Food Distribution Management System</div>
                            <div className="box_tit_sub">Help build a food distribution platform</div>
                            <p>Receiving, ordering, receiving, shipping, inventory, and settlement functions for food distribution</p>
                            <p>Support for foreign commerce, including credit limits for each customer, and promotions, including additional bonus points for deposits. </p>
                            <div className="food_system">
                                <div className="title">System Structure</div>
                                <div className="food_system_cnt">
                                    <div className="del_direct">
                                        <span>Direct shipping</span>
                                        <strong className="pointer pointer0"></strong>
                                        <strong className="pointer pointer1"></strong>
                                        <strong className="pointer pointer2"></strong>
                                    </div>
                                    <div className="group">
                                        <div className="tit">Vendors</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="down"><span>Warehouse<br/> Receiving</span></span>
                                        <span className="up"><span>Orders</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">System</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="up"><span>Order</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">Ordering Company</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="up"><span>Approvals</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">Distributor</div>
                                        <div className="tit">Distributor</div>
                                    </div>
                                    <div className="del_app">
                                        <span>Direct shipping <strong>Manage APP</strong></span>
                                        <strong className="pointer pointer0"></strong>
                                        <strong className="pointer pointer1"></strong>
                                        <strong className="pointer pointer2"></strong>
                                    </div>
                                </div>
                            </div>
                            <div className="boxtext_list">
                                <div className="title">System advantages</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">Multiple payments</div>
                                        <div className="cnt">
                                            <span>Deposits</span>
                                            <span>Accounts payable (line of credit)</span>
                                            <span>PG</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Manage orders</div>
                                        <div className="cnt">
                                            <span>Create a picklist</span>
                                            <span>Print a release slip</span>
                                            <span>Direct shipping management app</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Manage contractors</div>
                                        <div className="cnt">
                                            <span>Can operate sub-distributors</span>
                                            <span>Select with or without agency payment</span>
                                            <span>Enable approval system</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">Manage shipments</div>
                                        <div className="cnt">
                                            <span>Direct logistics support</span>
                                            <span>General delivery (invoice registration)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
