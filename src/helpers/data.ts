export type EmailItemType = {
  id: number;
  title: string;
  excerpt: string;
  createdAt: Date;
  selected?: boolean;
};

export const data: EmailItemType[] = [
  {
    id: 1,
    title: "Important updates for our customers",
    excerpt:
      "Dear valued customers, we wanted to inform you of some important updates...",
    createdAt: new Date("2022-07-31T09:00:00.000Z"),
  },
  {
    id: 2,
    title: "Your order has shipped!",
    excerpt:
      "Dear customer, we're happy to let you know that your order has shipped...",
    createdAt: new Date("2022-07-28T14:30:00.000Z"),
  },
  {
    id: 3,
    title: "Reminder: Your subscription will renew soon",
    excerpt:
      "Hi there, we wanted to remind you that your subscription will renew in a few days...",
    createdAt: new Date("2022-07-26T16:45:00.000Z"),
  },
  {
    id: 4,
    title: "New product announcement",
    excerpt:
      "Introducing our latest product: the XYZ toolkit. Learn more about its features...",
    createdAt: new Date("2022-07-24T11:20:00.000Z"),
  },
  {
    id: 5,
    title: "Your account security has been updated",
    excerpt:
      "We recently made some changes to our security settings. Please review your account...",
    createdAt: new Date("2022-07-22T08:15:00.000Z"),
  },
  {
    id: 6,
    title: "Thank you for your purchase!",
    excerpt:
      "Dear customer, thank you for your recent purchase. We hope you enjoy your new...",
    createdAt: new Date("2022-07-20T12:10:00.000Z"),
  },
  {
    id: 7,
    title: "Important notice regarding your account",
    excerpt:
      "We recently detected some suspicious activity on your account. Please reset your...",
    createdAt: new Date("2022-07-18T17:30:00.000Z"),
  },
  {
    id: 8,
    title: "New feature announcement",
    excerpt:
      "We're excited to announce a new feature: the ability to schedule your...",
    createdAt: new Date("2022-07-16T14:00:00.000Z"),
  },
  {
    id: 9,
    title: "Reminder: Your appointment is tomorrow",
    excerpt:
      "Hi there, we just wanted to remind you that you have an appointment scheduled...",
    createdAt: new Date("2022-07-14T10:45:00.000Z"),
  },
  {
    id: 10,
    title: "Update regarding your support ticket",
    excerpt:
      "Dear customer, we wanted to provide you with an update on your support ticket...",
    createdAt: new Date("2022-07-12T15:20:00.000Z"),
  },
  {
    id: 11,
    title: "New blog post: How to increase your productivity",
    excerpt:
      "Check out our latest blog post for some tips on how to increase your productivity...",
    createdAt: new Date("2022-07-10T07:30:00.000Z"),
  },
  {
    id: 12,
    title: "Your account has been suspended",
    excerpt:
      "We regret to inform you that your account has been suspended due to a violation...",
    createdAt: new Date("2022-07-08T18:00:00.000Z"),
  },
  {
    id: 13,
    title: "We're hiring! Join our team as a software engineer",
    excerpt:
      "Are you a talented software engineer looking for a new challenge? We're hiring...",
    createdAt: new Date("2022-07-06T13:45:00.000Z"),
  },
  {
    id: 14,
    title: "Your feedback is important to us",
    excerpt:
      "We value your feedback and would appreciate it if you could take a few minutes to...",
    createdAt: new Date("2022-07-04T09:10:00.000Z"),
  },
  {
    id: 15,
    title: "Reminder: Your subscription is about to expire",
    excerpt:
      "Hi there, we wanted to remind you that your subscription is about to expire...",
    createdAt: new Date("2022-07-02T11:55:00.000Z"),
  },
  {
    id: 16,
    title: "New release: Version 2.0 of our app is now available",
    excerpt:
      "We're excited to announce the release of version 2.0 of our app. Learn more about...",
    createdAt: new Date("2022-07-01T16:20:00.000Z"),
  },
  {
    id: 17,
    title: "Important notice regarding your payment",
    excerpt:
      "We were unable to process your payment. Please update your payment information...",
    createdAt: new Date("2022-06-29T19:15:00.000Z"),
  },
  {
    id: 18,
    title: "Congratulations! You've been selected for a special offer",
    excerpt:
      "As a valued customer, we're offering you a special discount on our new product...",
    createdAt: new Date("2022-06-27T10:00:00.000Z"),
  },
  {
    id: 19,
    title: "Your account has been upgraded",
    excerpt:
      "Congratulations! You've been upgraded to our premium plan. Enjoy new features...",
    createdAt: new Date("2022-06-25T14:30:00.000Z"),
  },
  {
    id: 20,
    title: "New webinar: Learn how to use our product more effectively",
    excerpt:
      "Join our upcoming webinar to learn some tips and tricks for using our product...",
    createdAt: new Date("2022-06-23T08:45:00.000Z"),
  },
];
