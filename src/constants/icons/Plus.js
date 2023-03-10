export const Plus = () => (
  <span
    style={{
      // display: "inline-block",
      height: 24,
      verticalAlign: "middle",
    }}
    dangerouslySetInnerHTML={{
      __html: `
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.99988V18.9999"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M5 12H19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      `,
    }}
  />
);
