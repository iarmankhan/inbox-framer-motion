import { ArchiveIcon } from "./icons/archive";
import { RefreshIcon } from "./icons/refresh";
import { motion } from "framer-motion";

interface HeaderProps {
  handleReset: () => void;
  handleArchive: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <div className="py-2 px-4 flex items-center justify-between">
      <motion.div
        onClick={props.handleReset}
        className="cursor-pointer hover:bg-gray-100 p-1 rounded-md transition-all"
        whileTap={{
          scale: 0.9,
        }}
      >
        <RefreshIcon />
      </motion.div>
      <div className="flex-1">
        <h1 className="font-bold text-lg text-center">Inbox</h1>
      </div>
      <motion.div
        onClick={props.handleArchive}
        className="cursor-pointer hover:bg-gray-100 p-1 rounded-md transition-all"
        whileTap={{
          scale: 0.9,
        }}
      >
        <ArchiveIcon />
      </motion.div>
    </div>
  );
}
