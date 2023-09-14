import localfont from "next/font/local";

const sfmedium = localfont({
    src: "../../public/fonts/SF-Pro-Display-Medium.otf",
    variable: '--font-sfmedium'
  });
  
  const sfheavy = localfont({
    src: "../../public/fonts/SF-Pro-Display-Heavy.otf",
    variable: '--font-sfheavy'
  });
  
  const sfbold = localfont({
    src: "../../public/fonts/SF-Pro-Display-Bold.otf",
    variable: '--font-sfbold'
  });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={sfbold.className}>{children}</div>;
}
