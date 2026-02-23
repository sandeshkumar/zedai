import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-heading font-[800] text-[clamp(4rem,10vw,7rem)] leading-none text-transparent bg-clip-text bg-linear-to-r from-db-light to-accent mb-4">
          404
        </h1>
        <h2 className="font-heading font-[700] text-[1.5rem] text-text-primary mb-3">
          Page Not Found
        </h2>
        <p className="text-text-muted text-[0.95rem] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block py-3.5 px-8 rounded-[var(--radius-md)] font-bold text-white text-[0.95rem] transition-all duration-200 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #F97316, #FB923C)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
