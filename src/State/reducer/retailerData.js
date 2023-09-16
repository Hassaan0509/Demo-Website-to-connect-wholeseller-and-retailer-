const retailerData = (
  state = [
    {
      key: 1,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/Profile",
    },
    {
      key: 2,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/Profile",
    },
    {
      key: 3,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/Profile",
    },
    {
      key: 4,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: false,
      mobile: "8782458834",
      link: "/Profile",
    },
    {
      key: 5,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/Profile",
    },
    {
      key: 6,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: false,
      mobile: "8782458834",
      link: "/Profile",
    },
  ],
  action
) => {
  if (action.type === "retailerData") {
    state = action.payload;
  }
  return state;
};

export default retailerData;
