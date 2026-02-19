export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-semibold mb-6">
          Thank You for Your Inquiry
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We have received your project details. Our team will review your
          requirements and connect with you shortly.
        </p>
        <a
          href="/"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition"
        >
          Return to Homepage
        </a>
      </div>
    </main>
  );
}