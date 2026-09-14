export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="ambient-glow glow-one" aria-hidden="true" />
      <div className="ambient-glow glow-two" aria-hidden="true" />
      {children}
    </>
  );
}
