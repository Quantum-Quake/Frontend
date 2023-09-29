import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  Select,
  SelectItem,
  NavbarMenu,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "../public/AcmeLogo.jsx";
import { LanguageContext } from "@/context/LanguageContext";
import { Language } from "@/enums/language";
import localfont from "next/font/local";

const sfmedium = localfont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sfmedium",
});

const Languages = [
  { label: "English", value: Language.english, description: "English" },
  { label: "हिंदी", value: Language.hindi, description: "Hindi" },
  { label: "मराठी", value: Language.marathi, description: "Marathi" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, setLanguage } = useContext(LanguageContext); // Get the language state from the context

  const menuItems = [
    "Contact Lawyers",
    "Fill-a-Form",
    "Take Action",
    "Profile",
    "Dashboard",
    "My Settings",
    "Help & Feedback",
    "Contact Us",
    "Log Out",
  ];

  //This is for changing the headings in different languages
  const [navbarItems, setNavbarItems] = useState({
    contactLawyers: "",
    takeActions: "",
    news: "",
    contactUs: "",
    selectLanguage: "",
    login: "",
    signUp: "",
  });

  useEffect(() => {
    // console.log(language.values().next().value);
    async function temp() {
      if (language.values().next().value === Language.hindi) {
        // console.log("HINDI SECTION");
        setNavbarItems({
          contactLawyers: "वकील से संपर्क करें",
          takeActions: "कार्यवाही",
          news: "समाचार",
          contactUs: "संपर्क करें",
          selectLanguage: "---भाषा चुने---",
          login: "लॉगीन",
          signUp: "साईन अप",
        });
      } else if (language.values().next().value === Language.english) {
        // console.log("ENGLISH SECTION");
        setNavbarItems({
          contactLawyers: "Contact Lawyers",
          takeActions: "Take Actions",
          news: "News",
          contactUs: "Contact Us",
          selectLanguage: "Select Language",
          login: "Login",
          signUp: "Sign Up",
        });
      } else if (language.values().next().value === Language.marathi) {
        // console.log("MARATHI SECTION");
        setNavbarItems({
          contactLawyers: "वकीलाशी संपर्क साधा",
          takeActions: "कारवाई",
          news: "बातम्या",
          contactUs: "संपर्क साधा",
          selectLanguage: "---भाषा निवडा---",
          login: "लॉगीन",
          signUp: "साईन अप",
        });
      }
    }
    temp();
  }, [language]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered={true}
      isBlurred={true}
      className=""
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Juris</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className={sfmedium.className}>
          <Link color="foreground" href="#">
            {navbarItems.contactLawyers}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {navbarItems.takeActions}
          </Link>
        </NavbarItem>
        <NavbarItem className={sfmedium.className}>
          <Link color="foreground" href="#">
            {navbarItems.news}
          </Link>
        </NavbarItem>
        <NavbarItem className={sfmedium.className}>
          <Link color="foreground" href="#">
            {navbarItems.contactUs}
          </Link>
        </NavbarItem>
        <NavbarItem className={`w-full ${sfmedium.className}`}>
          <div className="flex w-full max-w-xs flex-col gap-2">
            <Select
              label={navbarItems.selectLanguage}
              variant="bordered"
              size="sm"
              placeholder="Language"
              selectedKeys={language}
              className="max-w-l min-w-max"
              onSelectionChange={setLanguage}
            >
              {Languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">{navbarItems.login}</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat">
            {navbarItems.signUp}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
