import Layout from "../components/Layout";

export default function CancellationPolicy() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">Cancellation & Refund Policy</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <section>
              <p className="text-gray-700 text-justify mb-4">
                MEDICAUSE believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. 
                <br />
                <br />
                Under this policy:
              </p>
            </section>

            <section>
              <ul className="space-y-4 text-gray-700 text-justify">
                <li>
                  <p>
                    Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                  </p>
                </li>

                <li>
                  <p>
                    MEDICAUSE does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                  </p>
                </li>

                <li>
                  <p>
                    In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 3 days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 3 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                  </p>
                </li>

                <li>
                  <p>
                    In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the MEDICAUSE it'll take 3-5 days for the refund to be processed to the end customer.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
