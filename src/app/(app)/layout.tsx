export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">{children}</div>
  );
}
