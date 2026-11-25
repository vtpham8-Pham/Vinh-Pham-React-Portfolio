// Every page is a full load, so the title is set once, before the kit's scripts read the head.
export default function usePageTitle(title) {
  if (typeof document !== "undefined" && document.title !== title) document.title = title;
}
