// pages/terms-of-use.js

import React from "react";

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="text-lg mb-4">Last Updated: [Date]</p>

      <p className="mb-4">
        Welcome to <strong>FailedIdeas.com</strong>. By using our platform, you
        agree to the following terms and conditions. If you do not agree to
        these terms, please do not use our services.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using FailedIdeas.com, you agree to be bound by these
        Terms of Use. We may update these terms from time to time, and your
        continued use of the platform after any changes signifies your
        acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. User Accounts</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          To list a project or purchase a project on the platform, you must
          create an account.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account information, including your password.
        </li>
        <li>
          You agree to provide accurate and up-to-date information when
          registering and using the platform.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Listing and Selling Projects</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          You may list abandoned or failed projects for sale on the platform by
          providing accurate descriptions, pricing, and related assets.
        </li>
        <li>
          You represent that you have the legal right to sell the project and
          that the information provided is truthful.
        </li>
        <li>
          We reserve the right to remove or refuse any listings that violate our
          policies or are deemed inappropriate.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Buying Projects</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Buyers are responsible for reviewing listings carefully and ensuring
          they understand what they are purchasing.
        </li>
        <li>
          All sales are final, and FailedIdeas.com is not responsible for any
          disputes that arise between buyers and sellers.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Transaction Fees</h2>
      <p className="mb-4">
        We charge a 5% transaction fee for every sale completed on the platform.
        This fee is deducted from the seller's payment.
      </p>
      <p className="mb-4">
        Payments are processed via our third-party payment provider Stripe. By
        using our platform, you agree to their terms and conditions as well.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Payment and Billing</h2>
      <ul className="list-disc list-inside mb-4">
        <li>All payments for sales are processed securely through Stripe.</li>
        <li>Sellers must provide valid payment details to receive funds from their sales.</li>
        <li>The platform is not responsible for any payment processing errors or delays caused by third-party services.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Prohibited Activities</h2>
      <p className="mb-4">
        You agree not to engage in any of the following activities while using
        the platform:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Posting false, misleading, or fraudulent listings.</li>
        <li>Violating any applicable laws, regulations, or third-party rights.</li>
        <li>
          Attempting to disrupt or interfere with the platform’s functionality or
          security.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property</h2>
      <p className="mb-4">
        All content on FailedIdeas.com, including but not limited to text,
        images, logos, and code, is the property of FailedIdeas.com or its
        content suppliers and is protected by copyright and other intellectual
        property laws. You may not use or reproduce any content from the
        platform without permission.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination of Accounts</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your account at any time if
        you violate these terms or engage in activities that harm the platform
        or its users.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
      <p className="mb-4">
        FailedIdeas.com is not responsible for any losses or damages that result
        from your use of the platform, including but not limited to disputes
        between buyers and sellers, loss of data, or unauthorized access to your
        account.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
      <p className="mb-4">
        These Terms of Use are governed by the laws of [Your Jurisdiction]. Any
        disputes arising from the use of the platform will be resolved in the
        courts of [Your Jurisdiction].
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Use at any time. Your continued use of the
        platform after any changes indicates your acceptance of the updated
        terms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
      <p className="mb-4">
        For any questions or concerns regarding these Terms of Use, please
        contact us at:
      </p>

      <p>
        <strong>FailedIdeas.com</strong>
        <br />
        <strong>Email:</strong> support@failedideas.com
      </p>
    </div>
  );
};

export default TermsOfUse;
