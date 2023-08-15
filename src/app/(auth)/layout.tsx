export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="rounded-md bg-slate-200 p-10">{children}</div>;
}
