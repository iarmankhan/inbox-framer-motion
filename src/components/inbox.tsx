import { EmailItem } from "./email-item";
import { Header } from "./header";
import { EmailItemType, data } from "../helpers/data";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Inbox() {
  const [emails, setEmails] = useState<EmailItemType[]>(data.slice(-1));

  const handleReset = useCallback(() => {
    setEmails(data);
  }, []);

  const handleArchive = useCallback(() => {
    setEmails((prevEmails) => {
      return prevEmails.filter((email) => !email?.selected);
    });
  }, []);

  const handleEmailClick = useCallback((emailId: number) => {
    setEmails((prevEmails) => {
      return prevEmails.map((email) => {
        if (email.id === emailId) {
          return {
            ...email,
            selected: !email?.selected,
          };
        }

        return email;
      });
    });
  }, []);

  return (
    <div className="border rounded-md">
      <Header handleArchive={handleArchive} handleReset={handleReset} />
      <div className="flex flex-col max-h-[500px] py-2 px-2 overflow-auto">
        <AnimatePresence mode="popLayout" initial={false}>
          {emails.length ? (
            emails.map((email) => {
              return (
                <EmailItem
                  key={email.id}
                  item={email}
                  handleClick={() => handleEmailClick(email.id)}
                />
              );
            })
          ) : (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "200px",
                opacity: 1,
              }}
              className="flex items-center justify-center"
            >
              <p>No E-mails yet!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
