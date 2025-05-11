import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">About Us</h1>
        <p className="text-lg text-medium-contrast text-center">
          We believe technology should be approachable and accessible for everyone. Our mission is to help people and organizations solve real problems with practical, honest, and inclusive AI solutions.
        </p>
        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
