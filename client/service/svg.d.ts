// svg.d.ts

declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
