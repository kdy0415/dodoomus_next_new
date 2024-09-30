import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header(){
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const openMenu = () => {
        setModalOpen(true);
    };
    const closeMenu = () => {
        setModalOpen(false);
    };
    const handleLinkClick = (href) => {
        if (router.asPath === href) {
            closeMenu(); 
        }
    };
    return (
        <div id="header">
            <div className="hd_inner">
                <div className="in_wrap">
                    <h1 id="logo"><Link href="/">Dodoom</Link></h1>
                    {/* <a href="/_next/static/files/Dodoom.pdf" className="hd_brochure" download>company brochure</a> */}
                    <button type="button" id="menuToggle" className="menu_toggle" onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="sound_only">open navigation</span>
                    </button>
                    <div className={modalOpen ? 'nav_wrap active' : 'nav_wrap'} >
                        <div id="" className="nav_box">
                            <ul id="nav">
                            <li>
                                <Link href='/'>
                                    <div onClick={() => handleLinkClick('/')}>
                                    <span className="en">Home</span><span className="kr"><span>홈</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/business/platform'>
                                    <div onClick={() => handleLinkClick('/business/platform')}>
                                    <span className="en">Business</span><span className="kr"><span>사업소개</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <div onClick={() => handleLinkClick('/about')}>
                                    <span className="en">About</span><span className="kr"><span>회사소개</span></span>
                                    </div>
                                </Link>
                            </li>
                            </ul>
                            {/* <div className="brochure">
                                <a href="/_next/static/files/Dodoom.pdf" download>company brochure</a>
                            </div> */}
                            <div className="nav_cs">
                                <div className="item">
                                    <span className="tit">E-mail</span>
                                    <span className="cnt font_m">phan@dodoom.co.kr</span>
                                </div>
                                <div className="item">
                                    <span className="tit">Office</span>
                                    <span className="cnt">STE 605, 79 Jungang-Ro 1261 beon-Gil, Goyang-Si, Ilsandong-Gu, Gyeonggi-Do (10402)</span>
                                </div>
                                <div className="item">
                                    <span className="tit">Tel</span>
                                    <span className="cnt">+82-2-6012-4040</span>
                                </div>
                                <div className="nav_copy">ⓒ Dodoom. All Rights Reserved.</div>
                            </div>
                        </div>
                        <button type="button" className="nav_close" onClick={closeMenu}>close navigation</button>
                    </div>
                </div>
            </div>
        </div>
    )
}