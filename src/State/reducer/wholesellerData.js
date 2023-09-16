const WholesellerData = (
  state = [
    {
      key: 1,
      name: "ali",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
    {
      key: 2,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
    {
      key: 3,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
    {
      key: 4,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: false,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
    {
      key: 5,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: true,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
    {
      key: 6,
      name: "Hassaan",
      email: "hahmad2205",
      business: "adsv",
      verify: false,
      mobile: "8782458834",
      link: "/WholesellerBusinessDetail",
    },
  ],
  action
) => {
  if (action.type === "wholesellerData") {
    state = action.payload;
  }
  return state;
};

export default WholesellerData;
