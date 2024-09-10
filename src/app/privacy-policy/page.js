// pages/privacy-policy.js

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">Last Updated: [Date]</p>

      <p className="mb-4">
        At <strong>FailedIdeas.com</strong>, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform to buy or sell abandoned or failed projects.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        When you use our platform, we may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when creating an account or listing a project.
        </li>
        <li>
          <strong>Project Information:</strong> Any details related to the projects you list, including descriptions, assets, and price.
        </li>
        <li>
          <strong>Transaction Information:</strong> Details of sales completed through the platform, including payment information, for billing and accounting purposes.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our platform, such as pages visited, time spent on the site, and browser details.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Facilitate and process transactions on the platform.</li>
        <li>Provide customer support and respond to inquiries.</li>
        <li>Improve our services, features, and user experience.</li>
        <li>Send promotional and transactional emails, including updates about your listings or purchases.</li>
        <li>Comply with legal obligations and resolve disputes.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We will not share or sell your personal data to third parties, except in the following cases:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Service Providers:</strong> We may share your information with third-party service providers who assist in running the platform, such as payment processors (e.g., Stripe).
        </li>
        <li>
          <strong>Legal Compliance:</strong> We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Processing</h2>
      <p className="mb-4">
        We use third-party services like Stripe to handle payments on the platform. We do not store any credit card information on our servers. All payment information is securely processed by our payment partners.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to enhance your experience on the platform, monitor usage patterns, and deliver targeted advertisements. You can disable cookies through your browser settings, but some features of the platform may not function properly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of any inaccurate information.</li>
        <li>Request deletion of your account and associated data.</li>
        <li>Opt-out of promotional communications.</li>
      </ul>
      <p className="mb-4">
        To exercise any of these rights, please contact us at <strong>support@failedideas.com</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the revised policy on the platform. Your continued use of the platform after any changes constitutes your acceptance of the updated policy.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p>
        <strong>FailedIdeas.com</strong>
        <br />
        <strong>Email:</strong> support@failedideas.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
