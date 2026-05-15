export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <meta name="google-site-verification" content="cMaII85inaE9pjxozU7rGU6fRM50f_sI_rXycdouDuU" />
      <body>
        {children}

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=12345678;
              var sc_invisible=1;
              var sc_security="abcd1234";
            `,
          }}
        />

        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />
      </body>
    </html>
  )
}
