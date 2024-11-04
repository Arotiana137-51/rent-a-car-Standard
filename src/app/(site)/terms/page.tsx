import Breadcrumb from "@/components/Common/Breadcrumb";


const TermsOfService= () => {
  return (
    <>
     <Breadcrumb pageName="Terms of Services" />
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Terms and Conditions - Car Rental with Driver</h1>
        <p className="mt-4 text-gray-600 italic">
          By confirming a booking with Madagascar Rental, you acknowledge that you have read, fully understand, and accept
          the following terms and conditions.
        </p>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Definitions</h2>
          <ul className="space-y-2">
            <li><span className="font-medium">&quot;MR&quot;</span> means Madagascar Rental;</li>
            <li><span className="font-medium">&quot;Company&quot;</span> means Madagascar Rental SARL;</li>
            <li><span className="font-medium">&quot;You&quot;</span> or <span className="font-medium">&quot;Hirer&quot;</span> means the
              person(s) who have signed the Rental Agreement;</li>
            <li><span className="font-medium">&quot;Driver&quot;</span> means the professional driver provided by Madagascar Rental;
            </li>
            <li><span className="font-medium">&quot;Rental Agreement&quot;</span> means the contract between You and the Owner;</li>
            <li><span className="font-medium">&quot;Vehicle&quot;</span> means the rented vehicle as described in your reservation;
            </li>
            <li><span className="font-medium">&quot;MR Insurance&quot;</span> means Madagascar Rental&apos;s insurance policy.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">2. Rental Terms</h2>
          <ul className="list-decimal pl-6 space-y-3">
            <li>The car rental service includes a driver-guide for the duration of the rental period. Vehicle return, along
              with the driver, must occur on the agreed date before 7:00 PM, unless specifically arranged otherwise with the
              Owner. Early returns of the car with the driver before the end date of the rental will not be eligible for
              refunds.</li>
            <li>The Vehicle shall be operated exclusively by the MR-appointed driver. </li>
            <li>The Vehicle is provided with a full fuel tank and must be returned with a full tank to avoid refueling
              charges.</li>
            <li>Fuel should only be purchased from authorized stations (Shell, Jovenna, Total, or other major brands). Using
              fuel from unauthorized sources may damage the vehicle and result in additional charges.</li>
            <li>For safety reasons, travel is strongly discouraged between 9:30 PM and 3:30 AM.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">3. Breakdown and Accidents</h2>
          <div className="space-y-3">
            <p>In the event of an accident or mechanical breakdown that cannot be repaired within 24 hours:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A replacement vehicle will be provided as soon as possible</li>
              <li>If the breakdown repair lasts more than 5 hours, the Hirer will not be charged the daily fees of the car rental during the time the vehicle is out of service.</li>
              <li>Time lost within the initial 24-hour period is at the Hirer&apos;s expense</li>
              <li>Madagascar Rental is not liable for refunding activity fees, accommodations, or other related expenses</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">4. Liability</h2>
          <ul className="list-decimal pl-6 space-y-3">
            <li>Madagascar Rental shall not be liable for:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Loss or damage of personal belongings</li>
                <li>Personal injury to the Hirer or companions</li>
                <li>Travel insurance is strongly recommended</li>
                <li>However, Madagascar Rental will provide assistance and appropriate help if such events occur</li>
              </ul>
            </li>
            <li>Madagascar Rental accepts no liability for circumstances beyond its control, including but not limited
              to:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acts of nature or unforeseen circumstances</li>
                <li>Civil unrest or political instability</li>
                <li>Severe weather conditions or natural calamities</li>
                <li>Official directives or border shutdowns</li>
                <li>Nevertheless, Madagascar Rental will offer support and appropriate assistance if such events arise.</li>
              </ul>
            </li>
            <li>The Car Owner, the appointed driver, and Madagascar Rental accept and take liability for circumstances under
              their control, including but not limited to:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Mechanical failures due to improper maintenance from the Car Owner</li>
                <li>Accidents caused by the driver-guide’s negligence</li>
                <li>Failure to provide the agreed-upon vehicle type</li>
                <li>Delays caused by the company’s scheduling errors</li>
                <li>Driver-guide’s non-compliance with transportation laws</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">5. Payment and Cancellation</h2>
          <ul className="list-decimal pl-6 space-y-3">
            <li>Booking Confirmation:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>10% non-refundable deposit required</li>
                <li>Payment accepted via bank transfer or major credit cards</li>
                <li>Balance due 14 days before departure</li>
              </ul>
            </li>
            <li>Cancellation Policy:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Free cancellation up to 72 hours before pickup</li>
                <li>50% charge for cancellations within 72 hours</li>
                <li>100% charge for no-shows</li>
                <li>Travel insurance is strongly recommended for cancellation coverage</li>
                <li>Modifications subject to availability and may incur additional charges</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">6. Additional Terms</h2>
          <ul className="list-decimal pl-6 space-y-3">
            <li>Website Information:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>While we strive for accuracy, no guarantees are made regarding website content</li>
                <li>Customers should independently verify critical information</li>
                <li>Prices and specifications subject to change without notice</li>
              </ul>
            </li>
          </ul>
        </section>
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            These terms and conditions are governed by the laws of Madagascar. Any disputes shall be subject to the
            exclusive jurisdiction of the courts of Madagascar.
          </p>
        </div>
      </div>
    </div>
    </>
    
  )
};

export default TermsOfService;
