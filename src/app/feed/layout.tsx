export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen mx-auto max-w-4xl bg-gray-50 dark:bg-gray-950">
      {/* Site Container */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Questions History
          </h1>
        </header>

        {/* Main Content */}
        <main className="py-8">{children}</main>
      </div>
    </div>
  );
}
