import { motion } from "framer-motion";
import { headingChildren } from "./Lib";

const Arrow = () => {
  return (
    <motion.div
      variants={headingChildren}
      initial='hidden'
      animate='visible'
      style={{
        display: `grid`,
        gridColumn: `1/-1`,
        maxWidth: `var(--maxxed-out)`,
        marginLeft: `auto`,
        marginRight: `auto`,
        justifyContent: `start`,
      }}
    >
      <svg
        style={{ height: `120px`, width: `100%`, color: `var(--accent)` }}
        width='23'
        height='134'
        viewBox='0 0 23 134'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.2081 133.073C10.7939 133.659 11.7437 133.659 12.3295 133.073L21.8754 123.527C22.4612 122.941 22.4612 121.991 21.8754 121.406C21.2896 120.82 20.3399 120.82 19.7541 121.406L11.2688 129.891L2.78352 121.406C2.19773 120.82 1.24798 120.82 0.662197 121.406C0.0764103 121.991 0.0764103 122.941 0.662197 123.527L10.2081 133.073ZM9.7688 0.952515L9.7688 132.012H12.7688L12.7688 0.952515L9.7688 0.952515Z'
          fill='#4F4CF9'
        />
      </svg>
    </motion.div>
  );
};

export default Arrow;
