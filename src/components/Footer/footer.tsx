import React from "react";
import footer from "@/components/Footer/footer.module.css";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";





const Footers = () => {
  return (
    <div>
      <footer className={footer.main}>
        <div className={footer.section1}>
          <div className={footer.logo}>
            <Image src="/logo.png" alt="Logo" width={60} height={50} />
          </div>
          <div className={footer.pic}>
            <AiOutlineFacebook />
            <RiTwitterFill />
            <IoLogoInstagram />
            <AiOutlineYoutube />
          </div>
        </div>
        <div className={footer.section2}>
          <div className={footer.content1}>
            <div className={footer.dev1}>
                <div>
                    <h1 >About Us</h1>
                    <p>Organisation </p>
                    <p>Partners</p>
                    <p>Clients</p>
                </div>
                <div>
                    <h1>Interesting Links</h1>
                    <p> Photo Gallery</p>
                    <p>Our Team</p>
                    <p>Socials</p>
                </div>
                <div>
                    <h1>Achievements</h1>
                    <p>Winning Awards </p>
                    <p>Press</p>
                    <p>Our Amazing Clients</p>
                </div>
            </div>
            <div className={footer.about}>
              <h1>Helpful Information</h1>
              <p>
                Nulla eleifend pulvinar purus, molestie euismod odio imperdiet
                ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec
                interdum, lectus in convallis pulvinar, enim elit porta sapien,
                vel finibus erat felis sed neque. Etiam aliquet neque sagittis
                erat tincidunt aliquam.{" "}
              </p>
            </div>
          </div>
          <div className={footer.content2}>
            <div className={footer.content}>
              <h1>Contact Us</h1>
              <p>
                Bendum dolor eu varius. Morbi fermentumvelitsodales egetonec.
                volutpat orci. Sed ipsum felisristiqueegestas et, convallis ac
                velitn consequat nec luctus.
              </p>
              <div className={footer.sectwo}>
    <div className={footer.contact}>
        <div className={footer.customcss}>
            <div className={footer.contactcustom}>
                <div className={footer.icon}><LuPhone /></div>
                <div className={footer.num} >Phone: (+63) 236 6322</div>
            </div>
            <div className={footer.contactcustom}>
                <div className={footer.icon}><MdMailOutline /></div>
                <div className={footer.num}>travel@journey.com</div>
            </div>
        </div>
    </div>
    <div className={footer.timing}>
        <div  className={footer.customcss}>
            <div className={footer.contactcustom}>
                <div className={footer.icon}><MdOutlineWatchLater /></div>
                <div className={footer.num1}>Mon - Fri: 10am - 6pm Sat - Sun: 10am - 6pm</div>
            </div>
            <div className={footer.contactcustom}>
                <div className={footer.icon}><CiLocationOn /></div>
                <div className={footer.num1} >639 Jade Valley, Washington Dc</div>
            </div>
        </div>
    </div>
</div>

            </div>
          </div>
        </div>
        <div className={footer.copyright}>CopyRightRameshasheikh2024</div>
      </footer>
    </div>
  );
};

export default Footers;
