import Image from "next/image";

import metaImg from "@/public/images/meta.png";
import xImg from "@/public/images/x.png";
import lkImg from "@/public/images/linkedin.png";
import waImg from "@/public/images/whatsapp.png";
import yuImg from "@/public/images/youtube.png";

const Footer = () => (
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-6">
                <p className="copyright">2024 &copy; Copyright <a href="https://dataorb.co/">dataorb.co</a> All rights Reserved.</p>
            </div>
            <div className="col-md-6 col-sm-6">
                <div className="social-network py-4 space-x-4">
                    <a href="https://whatsapp.com/channel/0029Vajpqo1HLHQWpoo5HD3a" className="text-gray-100" target="_blank">
                        <Image className="inline-block" src={waImg} alt="whatsapp"  width="32" height="32" />
                    </a>
                    <a href="https://twitter.com/getdataorb" className="text-gray-100" target="_blank">
                        <Image className="inline-block" src={xImg} alt="X"  width="32" height="32" />
                    </a>
                    <a href="https://www.facebook.com/joindataorb/" className="text-gray-100" target="_blank">
                        <Image className="inline-block" src={metaImg} alt="facebook"  width="32" height="32" />
                    </a>
                    <a href="https://www.linkedin.com/company/getdataorb/" className="text-gray-100" target="_blank">
                        <Image className="inline-block" src={lkImg} alt="linkedin"  width="32" height="32" />
                    </a>
                    <a href="https://www.youtube.com/@smartcoders1" className="text-gray-100" target="_blank">
                        <Image className="inline-block" src={yuImg} alt="linkedin"  width="32" height="32" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
);

export default Footer;