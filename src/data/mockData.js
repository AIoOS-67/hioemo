export const desktopCards = [
  {
    label: "Product Loop",
    items: [
      "Fan likes a video",
      "Creator gets paid",
      "CAA identifies top fans",
      "Creator rewards them back",
    ],
  },
  {
    label: "MVP Pages",
    items: [
      "Landing",
      "Wallet connect",
      "Budget setup",
      "Feed",
      "Creator dashboard",
      "Supporters",
      "Campaign builder",
    ],
  },
];

export const initialActivityItems = [
  {
    id: "seed-reward-1",
    title: "Reward received from @mika.studio",
    subtitle: "Top supporter campaign",
    amount: "+$0.02",
    positive: true,
    type: "reward_campaign",
  },
  {
    id: "seed-like-1",
    title: "Like sent to @mika.studio",
    subtitle: "Short-video support payment",
    amount: "-$0.01",
    positive: false,
    type: "like_payment",
  },
];

export const supporterRows = [
  {
    rank: "#1",
    name: "alex.loop",
    meta: "$1.20 sent · 6 paid likes · 94% completion",
    tag: "Eligible",
    muted: false,
  },
  {
    rank: "#2",
    name: "jun3verse",
    meta: "$0.86 sent · 4 paid likes · 92% completion",
    tag: "Eligible",
    muted: false,
  },
  {
    rank: "#3",
    name: "momo.signal",
    meta: "$0.64 sent · 3 paid likes · 88% completion",
    tag: "Watchlist",
    muted: true,
  },
];

export const budgetOptions = ["1.00", "2.00", "5.00"];
export const likeOptions = ["0.01", "0.02", "0.05"];
