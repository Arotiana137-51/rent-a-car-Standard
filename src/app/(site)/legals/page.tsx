// LegalNotice.jsx
export function LegalNotice() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Legal Notice</h1>
      </div>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Company Information</h2>
          <p className="mb-2">Madagascar Rental is a registered company in Madagascar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registration Number: [Company Registration Number]</li>
            <li>Stat Number: [VAT Number]</li>
            <li>NIF Number: [VAT Number]</li>
            <li>Registered Office: Centre Fiscal Antsirabe</li>
            <li>Contact: [Email] | [Phone]</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">2. Intellectual Property</h2>
          <p>All content on this website is protected by copyright and belongs to Madagascar Rental.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">3. Liability</h2>
          <p className="mb-2">Madagascar Rental strives to provide accurate information but:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cannot guarantee the accuracy of all information on the website</li>
            <li>Reserves the right to modify information without notice</li>
            <li>Is not liable for indirect damages from website use</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">4. Applicable Law</h2>
          <p>These legal notices are governed by Madagascar law. Any disputes will be subject to the exclusive jurisdiction of Madagascar courts.</p>
        </section>
      </div>
    </div>
  )
}