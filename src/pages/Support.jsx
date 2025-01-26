import Heading from "../components/Heading";

const Support = () => {
  return (
    <div className="">
      <Heading
        title="Help Center"
        description="SKB Gadget Support- We're here to assist you. If you have any questions or concerns, don't hesitate to reach out. Our team is dedicated to providing the best support to ensure your satisfaction."
      />
      <div className="mx-auto w-11/12 max-w-screen-xl">
        <div className="my-12">
          <h3 className="mb-4 text-xl font-bold">Contact Form</h3>
          <form>
            <div className="mb-4">
              <label className="mb-2 block">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded border p-2"
              ></textarea>
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
              }}
              type="submit"
              className="rounded-full bg-[#9538E2] px-4 py-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="my-12">
          <h3 className="mb-4 text-xl font-bold">FAQ</h3>

          <div className="join join-vertical w-full">
            <div className="collapse join-item collapse-arrow border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                What is your return policy?
              </div>
              <div className="collapse-content">
                <p>
                  "Our Return Policy: We want you to be completely satisfied
                  with your purchase. If for any reason you are not happy with
                  your product, you can return it within [number of days, e.g.,
                  30 days] from the date of purchase for a full refund or
                  exchange, provided the item is unused, in its original
                  packaging, and in resalable condition. To initiate a return:
                  Contact our support team at [support email/contact number].
                  Provide your order details and reason for return. Follow the
                  return instructions provided by our team. Please note that
                  shipping fees are non-refundable, and the customer is
                  responsible for return shipping costs unless the product is
                  defective or damaged." This template covers common return
                  policy elements, but feel free to adjust based on your
                  specific practices.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                How do I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  "How to Track Your Order: Once your order has been shipped,
                  you will receive an email with tracking information and a link
                  to track your package. Simply click the link to view real-time
                  updates on the status and delivery of your order. If you
                  haven’t received your tracking details or need assistance,
                  feel free to contact our support team at [support
                  email/contact number], and we’ll be happy to help you track
                  your order."** This version provides a clear, step-by-step
                  guide while also offering support if needed. Let me know if
                  you'd like to make any changes!
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  Here’s a straightforward response to answer your question
                  about accepted payment methods: "What Payment Methods Do We
                  Accept? We accept a variety of secure payment options,
                  including: Credit and Debit Cards (Visa, MasterCard, American
                  Express, etc.) PayPal Bank Transfers Mobile Payment Options
                  (e.g., Apple Pay, Google Pay) [Any other payment methods
                  specific to your business] For any questions or assistance
                  with payment, feel free to contact our support team at
                  [support email/contact number]. We're here to help!"** You can
                  customize this list with the specific methods you offer. Let
                  me know if you'd like to modify anything!
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                How long does shipping take?
              </div>
              <div className="collapse-content">
                <p>
                  Once your order has been shipped, you will receive an email
                  with tracking information so you can follow the progress of
                  your shipment. If you have any questions or need further
                  assistance, feel free to reach out to our support team at
                  [support email/contact number]."** You can fill in the exact
                  shipping times based on your policies and carriers. Let me
                  know if you need any adjustments!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
