export const designToken = {
  colors: {
    primary: {
      900: "#212967",
      800: "#2B3587",
      700: "#3745AF",
      600: "#4758E0",
      500: "#4E61F6",
      400: "#7181F8",
      300: "#8895F9",
      200: "#AEB6FB",
      100: "#C8CEFC",
      50: "#EDEFFE",
    },
    gray: {
      900: "#131927",
      800: "#212936",
      700: "#394050",
      600: "#4D5461",
      500: "#6D717F",
      400: "#9EA2AE",
      300: "#D2D5DB",
      200: "#E5E7EA",
      100: "#F3F4F6",
      50: "#F9FAFB",
    },

    success: "43B75D",
    error: "EE443F",
    warning: "FFAA00",
    info: "0095FF",

    background: "#fffff",
  },
  /* -------- TYPOGRAPHY -------- */
  typograph: {
    fontSize: {
      "6xl": "48px",
      "5xl": "40px",
      "4xl": "32px",
      "3xl": "28px",
      "2xl": "24px",
      xl: "20px",
      lg: "18px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      xss: "10px",
    },
    fontWeight: {
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    lineHeight: {
      relaxed: 1.75,
      normal: 1.5,
      tight: 1.25,
      none: 1,
    },
  },
};

export type DesignToken = typeof designToken;
