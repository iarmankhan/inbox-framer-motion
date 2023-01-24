import { motion } from "framer-motion";
import { EmailItemType } from "../helpers/data";

interface EmailItemProps {
  item: EmailItemType;
  handleClick: () => void;
}

const base = 4;
const t = (d: number) => d * base;

export function EmailItem(props: EmailItemProps) {
  const selectedEmailClasses = props.item?.selected
    ? "bg-blue-500 text-white hover:bg-blue-600"
    : "hover:bg-gray-50";

  return (
    <motion.div
      layout
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          opacity: {
            delay: t(0.025),
          },
        },
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
      transition={{
        duration: t(0.15),
        type: "spring",
        bounce: 0,
        opacity: {
          duration: t(0.03),
        },
      }}
      className={`rounded-md mb-1 cursor-pointer transition-colors ${
        props.item?.selected ? "bg-blue-500 text-white" : ""
      }`}
      onClick={props.handleClick}
    >
      <div className="p-2">
        <h4 className="text-md font-medium">{props.item.title}</h4>
        <p className={`text-sm mt-1`}>{props.item.excerpt}</p>
      </div>
    </motion.div>
  );
}
