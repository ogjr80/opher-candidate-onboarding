// app/layout.tsx

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Candidate Marketplace</title>
        <meta name="description" content="A platform to connect employers with potential candidates." />
      </head>
      <body>{children}</body>
    </html>
  );
}
