import Link from "next/link";
import Totop from "./toTop/toTop";

export default function Header(){
    return (
        <div id="footer">
            <Totop/>
            <div className="ft_bottom">
                <span className="ft_logo">Dodoom</span>
                <div className="ft_info">
                    <div className="info">
                        <div><strong>Company name: </strong>Dodoom Co., Ltd</div>
                        <div><strong>CEO: </strong>Kwangho Yoo</div>
                        <div><strong>Business license number: </strong>128-81-83609 </div><br/>
                        <div><strong>Privacy Officer: </strong>Kwangho Yoo</div>
                        <div><strong>Customer Center: </strong>+82-2-6012-4040</div>
                        <div><strong>Email: </strong>phan@dodoom.co.kr</div>
                    </div>
                    <span className="ads">STE 605, 79 Jungang-Ro 1261 beon-Gil, Goyang-Si, Ilsandong-Gu, Gyeonggi-Do (10402)</span>
                    {/* <div className="ft_te clearfix">
                        <span><strong>T</strong>02-6012-4040</span>
                        <span><strong>E</strong>phan@Dodoom.co.kr</span>
                    </div> */}
                </div>
                <span className="ft_copy">ⓒ Dodoom. All Rights Reserved.</span>
            </div>
        </div>
    )
}
