import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white fixed bottom-0 left-0 w-full ">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} FailedIdeas.com</p>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-white underline mr-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-white underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
