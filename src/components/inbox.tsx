import { EmailItem } from "./email-item";
import { Header } from "./header";
import { EmailItemType, data } from "../helpers/data";
import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

export function Inbox() {
  const [emails, setEmails] = useState<EmailItemType[]>(data);

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
      <div className="flex flex-col max-h-[500px] px-2 overflow-auto">
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
            <p>No E-mails yet!</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
