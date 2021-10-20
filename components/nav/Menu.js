import styled from "styled-components";
import MenuButton from "./MenuButton";
import CloseButton from "./CloseButton";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { MenuAnimations } from "../../styles/Lib";
import { useAppContext } from "../../ctx";

const Menu = () => {
  const { isNavVisible, setIsNavVisible } = useAppContext();
  const router = useRouter();

  function toggle() {
    setIsNavVisible(!isNavVisible);
  }

  async function handleLink(e, path) {
    // Take care of route change
    router.push({ pathname: path }, undefined, { scroll: false });
    // Take care of animation
    toggle();
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Choices
        variants={MenuAnimations}
        initial='hidden'
        animate={isNavVisible ? "visible" : "hidden"}
      >
        <li>
          <NavLink onClick={(e) => handleLink(e, "/")}>
            <a>Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={(e) => handleLink(e, "/development")}>
            <a>Development</a>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={(e) => handleLink(e, "/blog")}>
            <a>Blog</a>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={(e) => handleLink(e, "/contact")}>
            <a>Contact</a>
          </NavLink>
        </li>
      </Choices>
    </AnimatePresence>
  );
};

export default Menu;

export const Choices = styled(motion.ul)`
  list-style: none;
  padding: 4vw;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: var(--black);
  margin-top: 0;
  overflow: hidden;
  z-index: 5;
  li {
    margin-bottom: 2vh;
  }
`;

export const NavLink = styled(motion.button)`
  text-decoration: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: clamp(7vw, 4rem, 8vw);
  cursor: pointer;
  transition: ease-in-out 0.2s;
  font-family: "p22-underground", sans-serif;

  :hover {
    color: var(--accent);
  }
`;
