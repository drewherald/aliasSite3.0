import { useContext } from "react";
import { AliasContext } from "../App";
import aliasStudios from "../assets/photos/aliasStudios.png";
import NavLink from "./NavLink.tsx";
import NavLinkClose from "../assets/photos/NavLinkClose.png";
import { AnimatePresence, motion } from "framer-motion";
import '../assets/styles/componentStyles/MenuMobile.css'
import mobileMenu from "../assets/photos/ellipse.png";
import styles from '../assets/styles/WhiteFont.module.css'

export default function MenuMobile() {

    type navLinksInnerType = {
      title: string;
      href: string;
    }

    const navLinks: navLinksInnerType[] = [
      { title: "HOME", href: "/" },
        { title: "ABOUT", href: "/about" },
        { title: "SERVICES", href: "/services" },
        { title: "PROJECTS", href: "/projects" },
        { title: "PACKAGES", href: "/packages" },
        { title: "CONNECT", href: "/contact" },
      ];

      const AliasGlobal = useContext(AliasContext);

      const menuVars = {
        initial: {
          scaleY: 0,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        animate: {
          scaleY: 1,
        },
        exit: {
          scaleY: 0,
          transition: {
            duration: 0.5,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };
    
      const staggerVars = {
        initial: {
          transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
          },
        },
        open: {
          transition: {
            staggerChildren: 0.09,
            delayChildren: 0.3,
            staggerDirection: 1,
          },
        },
      };
    
    

  return (
    <>
     <div
        className={
          "mobileMenu" +
          (AliasGlobal.menuStatus == true ? " stopMenu" : " startMenu")
        }
      >
        <img src={mobileMenu} alt="" onClick={() => AliasGlobal.toggleMenu()} />
      </div>
     <AnimatePresence>
          {AliasGlobal.menuStatus && (
            <motion.div
              className="mobileMenuLinks"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div>
                {" "}
                <img src={aliasStudios} alt="" className="aliasStudiosMenu" />
              </div>
              <motion.div
                className="navLinkContainer"
                variants={staggerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className={`${styles.all} navOverflow`}>
                      <NavLink
                        title={link.title}
                        href={link.href}
                        key={index}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <div>
                <img
                  src={NavLinkClose}
                  alt=""
                  className="navLinkClose"
                  onClick={() => AliasGlobal.toggleMenu()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      
    </>
  )
}
