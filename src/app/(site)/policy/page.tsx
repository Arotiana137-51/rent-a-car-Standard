import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPolicy = () => {
  return (

    <>
    <Breadcrumb pageName="Privacy Policy" />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">
        At Madagascar Rental, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your personal information to ensure your privacy and trust.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information Collection and Use</h2>
      <p className="mb-2">
        We collect personal information that you provide to us when you use our services, including your name, contact information, and payment details. This information is used to process your booking and to communicate with you about your rental.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-2">
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-2">
        We may employ third-party companies and individuals to facilitate our services, provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-2">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-2">
        If you have any questions about this Privacy Policy, please contact us at contact@madagascarrental.com.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
