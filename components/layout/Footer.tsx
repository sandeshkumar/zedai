export function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-border-subtle text-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-heading font-[900] text-[1.2rem] mb-1.5">
          <span className="text-text-primary">ZED </span>
          <span className="text-accent">Labs</span>
        </div>
        <p className="text-text-dim text-[0.78rem]">
          Websites · Apps · AI · Digital Marketing
        </p>
        <p className="text-text-dim text-[0.78rem] mt-1.5">
          © {new Date().getFullYear()} ZED Labs. All rights reserved. |{" "}
          <a href="mailto:hello@zedai.tech" className="text-accent hover:underline">
            hello@zedai.tech
          </a>{" "}
          |{" "}
          <a href="tel:+919380341684" className="text-accent hover:underline">
            +91 9380341684
          </a>
        </p>
      </div>
    </footer>
  );
}
