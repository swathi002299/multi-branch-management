// Shared mock data + color tokens for all pages
export const colors = {
  purple: "hsl(270 95% 70%)",
  blue: "hsl(210 100% 65%)",
  green: "hsl(152 76% 55%)",
  orange: "hsl(28 100% 60%)",
  pink: "hsl(320 85% 65%)",
  teal: "hsl(180 80% 55%)",
};

export const monthlyTrend = [
  { name: "Jan", revenue: 42000, profit: 14000, expenses: 28000 },
  { name: "Feb", revenue: 51000, profit: 18000, expenses: 33000 },
  { name: "Mar", revenue: 47000, profit: 15500, expenses: 31500 },
  { name: "Apr", revenue: 58000, profit: 22000, expenses: 36000 },
  { name: "May", revenue: 64000, profit: 26500, expenses: 37500 },
  { name: "Jun", revenue: 72000, profit: 31000, expenses: 41000 },
  { name: "Jul", revenue: 78000, profit: 34500, expenses: 43500 },
  { name: "Aug", revenue: 84000, profit: 38000, expenses: 46000 },
  { name: "Sep", revenue: 91000, profit: 42000, expenses: 49000 },
  { name: "Oct", revenue: 96000, profit: 45500, expenses: 50500 },
  { name: "Nov", revenue: 104000, profit: 49500, expenses: 54500 },
  { name: "Dec", revenue: 118000, profit: 56000, expenses: 62000 },
];

export const miniSeries = (vals: number[]) => vals.map((v) => ({ v }));

export const branches = [
  { name: "New York HQ", city: "New York, USA", revenue: "$284,500", profit: "$98,400", orders: 1240, perf: 96, status: "active" },
  { name: "London Central", city: "London, UK", revenue: "$214,800", profit: "$72,100", orders: 980, perf: 89, status: "active" },
  { name: "Tokyo Tower", city: "Tokyo, JP", revenue: "$198,200", profit: "$66,500", orders: 870, perf: 87, status: "active" },
  { name: "Berlin West", city: "Berlin, DE", revenue: "$165,900", profit: "$54,200", orders: 760, perf: 82, status: "active" },
  { name: "Dubai Marina", city: "Dubai, UAE", revenue: "$142,400", profit: "$48,800", orders: 640, perf: 78, status: "active" },
  { name: "Sydney Bay", city: "Sydney, AU", revenue: "$118,700", profit: "$38,200", orders: 520, perf: 71, status: "pending" },
  { name: "Toronto North", city: "Toronto, CA", revenue: "$94,300", profit: "$28,500", orders: 410, perf: 68, status: "inactive" },
];

export const employees = [
  { name: "Sarah Chen", role: "Branch Manager", dept: "Operations", branch: "New York HQ", email: "sarah@mbms.io", status: "active" },
  { name: "Marco Rossi", role: "Senior Accountant", dept: "Finance", branch: "London Central", email: "marco@mbms.io", status: "active" },
  { name: "Yuki Tanaka", role: "Sales Lead", dept: "Sales", branch: "Tokyo Tower", email: "yuki@mbms.io", status: "active" },
  { name: "Anja Müller", role: "HR Specialist", dept: "Human Resources", branch: "Berlin West", email: "anja@mbms.io", status: "active" },
  { name: "Khalid Al-Farsi", role: "Logistics Manager", dept: "Operations", branch: "Dubai Marina", email: "khalid@mbms.io", status: "pending" },
  { name: "Emma Wilson", role: "Marketing Director", dept: "Marketing", branch: "Sydney Bay", email: "emma@mbms.io", status: "active" },
  { name: "James O'Brien", role: "IT Engineer", dept: "Technology", branch: "Toronto North", email: "james@mbms.io", status: "inactive" },
];

export const clients = [
  { name: "Globex Corporation", contact: "Hank Scorpio", country: "USA", revenue: "$184,200", orders: 42, status: "active" },
  { name: "Initech Ltd.", contact: "Bill Lumbergh", country: "UK", revenue: "$142,800", orders: 31, status: "active" },
  { name: "Umbrella Co.", contact: "Albert Wesker", country: "JP", revenue: "$128,400", orders: 28, status: "pending" },
  { name: "Stark Industries", contact: "Pepper Potts", country: "USA", revenue: "$118,900", orders: 26, status: "active" },
  { name: "Wayne Enterprises", contact: "Lucius Fox", country: "USA", revenue: "$104,500", orders: 24, status: "active" },
  { name: "Acme Holdings", contact: "Wile Coyote", country: "DE", revenue: "$92,300", orders: 19, status: "active" },
];

export const products = [
  { sku: "PRD-001", name: "Premium Widget Pro", category: "Hardware", price: "$199", stock: 248, status: "active" },
  { sku: "PRD-002", name: "Smart Gadget X", category: "Electronics", price: "$349", stock: 124, status: "active" },
  { sku: "PRD-003", name: "Industrial Bracket", category: "Hardware", price: "$45", stock: 1820, status: "active" },
  { sku: "PRD-004", name: "Cloud License (Yr)", category: "Software", price: "$1,200", stock: 999, status: "active" },
  { sku: "PRD-005", name: "Vintage Component", category: "Parts", price: "$78", stock: 12, status: "pending" },
];

export const orders = [
  { id: "ORD-10241", client: "Globex Corp", amount: "$4,820", date: "2026-04-28", status: "completed" },
  { id: "ORD-10242", client: "Initech Ltd.", amount: "$2,140", date: "2026-04-28", status: "shipped" },
  { id: "ORD-10243", client: "Stark Industries", amount: "$8,930", date: "2026-04-29", status: "processing" },
  { id: "ORD-10244", client: "Wayne Enterprises", amount: "$3,560", date: "2026-04-29", status: "pending" },
  { id: "ORD-10245", client: "Umbrella Co.", amount: "$1,290", date: "2026-04-30", status: "cancelled" },
  { id: "ORD-10246", client: "Acme Holdings", amount: "$5,720", date: "2026-04-30", status: "completed" },
];
