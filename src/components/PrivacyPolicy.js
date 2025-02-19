import React from "react";
import NavBar from "./Navbar/NavBar";

const PrivacyPolicy = () => {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div className="max-w-4xl mx-auto p-6 text-gray-800 justify-between items-center" data-aos="zoom-in" data-aos-delay="200">
      <h1 className="text-3xl font-bold mt-16 text-center">Privacy Policy</h1>
      <p>
      We value and attempt to preserve your privacy at ICE CONNECT ISP PVT LTD. This Privacy Policy explains how we collect, 
      use, store, and secure your personal data when you access or use our Internet Lease Line services, website, and other related products or services.
      </p>
      <p>
      We consent to the practices described in this policy by accessing or using our services.

      </p>
      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <p>
        We collect personal information that you provide to us when signing up
        for our services, interacting with our website, or communicating with
        our customer support team. The types of information we may collect
        include:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Personal Information:</strong> Full name, business name,
          contact details (phone number, email address), billing address, and
          payment information.
        </li>
        <li>
          <strong>Account Information:</strong> Account login credentials,
          service usage details, and subscription preferences.
        </li>
        <li>
          <strong>Technical Data:</strong> Internet usage data (IP address,
          browsing history, traffic data), device information, and network
          connection details related to your service.
        </li>
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We may use
          cookies, web beacons, and similar tracking technologies to collect
          data on how you use our website, and to enhance your experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p>We use the collected data for various purposes, including but not limited to:</p>
      <ul className="list-disc ml-6">
        <li>Providing and improving our Internet Lease Line services.</li>
        <li>Managing your account and processing service requests.</li>
        <li>Billing, payments, and invoicing.</li>
        <li>Customer support and technical assistance.</li>
        <li>Marketing, promotions, and service-related updates.</li>
        <li>Compliance with legal obligations and business protection.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. How We Protect Your Data</h2>
      <p>
        We take data security seriously and implement measures such as
        encryption, secure servers, and regular security audits to protect your
        personal information. However, no method of transmission over the
        Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Sharing Your Information</h2>
      <p>We may share your information with:</p>
      <ul className="list-disc ml-6">
        <li>Third-party service providers (e.g., payment processors, support vendors).</li>
        <li>Legal authorities if required by law.</li>
        <li>In business transfers such as mergers or acquisitions.</li>
      </ul>
      <p>We do not sell, rent, or trade personal information for marketing purposes.</p>

      <h2 className="text-2xl font-semibold mt-6">5. Your Data Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc ml-6">
        <li>Access and correct your personal data.</li>
        <li>Request deletion of your personal data.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Request data portability.</li>
      </ul>
      <p>To exercise these rights, contact us at [Insert Contact Information].</p>

      <h2 className="text-2xl font-semibold mt-6">6. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies to enhance your experience. You can manage or disable
        cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Third-Party Websites</h2>
      <p>
        Our website may contain links to third-party sites. This Privacy Policy
        applies only to our website, and we encourage you to review third-party
        privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6">8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
