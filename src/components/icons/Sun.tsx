import { createIcon } from "./createIcon";

export const Sun = createIcon({
  svg: (
    <svg
      fill="none"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" x2="12" y1="1" y2="3"></line>
      <line x1="12" x2="12" y1="21" y2="23"></line>
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
      <line x1="1" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="23" y1="12" y2="12"></line>
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
    </svg>
  ),
  displayName: "Sun",
});
