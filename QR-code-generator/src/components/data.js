export const sideMenu = [
    {
      id: 1,
      label: "Home",
      to: "/",
    },
    {
      id: 2,
      label: "Profile",
      to: "/profile",
      children: [
        {
          id: 3,
          label: "Details",
          to: "details",
          children: [
            {
              id: 4,
              label: "Location",
              to: "location",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      label: "Settings",
      to: "/settings",
      children: [
        {
          id: 6,
          label: "Account",
          to: "account",
        },
        {
          id: 7,
          label: "Security",
          to: "security",
          children: [
            {
              id: 8,
              label: "Login",
              to: "login",
            },
            {
              id: 9,
              label: "Register",
              to: "register",
            },
          ],
        },
      ],
    },
  ];
  