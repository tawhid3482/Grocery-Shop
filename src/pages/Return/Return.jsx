import { Helmet } from "react-helmet-async";

const Return = () => {
  return (
    <div className="">
      <Helmet>
        <title>Grocery-Shop | Returns Policy</title>
      </Helmet>
      <div className="">
        <div className="h-48 bg-[#F1FFE1] w-full flex flex-col justify-center items-center text-center">
          <p className="text-3xl md:text-5xl font-semibold text-[#019267] uppercase">
            Refund and Returns Policy
          </p>
          <p className="text-xs my-2 text-[#019267] uppercase">
            HOME {">"} Returns Policy
          </p>
        </div>

        <div className="w-4/6 mx-auto">
          <div className="">
            <p className="text-xl md:text-3xl font-bold my-5 uppercase">
              Overview
            </p>
            <p className="text-sm">
              Our refund and returns policy lasts 30 days. If 30 days have
              passed since your purchase, we can’t offer you a full refund or
              exchange. <br /> To be eligible for a return, your item must be
              unused and in the same condition that you received it. It must
              also be in the original packaging. <br /> Several types of goods
              are exempt from being returned. Perishable goods such as food,
              flowers, newspapers or magazines cannot be returned. We also do
              not accept products that are intimate or sanitary goods, hazardous
              materials, or flammable liquids or gases. <br /> Additional
              non-returnable items: Gift cards Downloadable software products
              Some health and personal care items To complete your return, we
              require a receipt or proof of purchase. <br /> Please do not send
              your purchase back to the manufacturer. There are certain
              situations where only partial refunds are granted: Book with
              obvious signs of use CD, DVD, VHS tape, software, video game,
              cassette tape, or vinyl record that has been opened. Any item not
              in its original condition, is damaged or missing parts for reasons
              not due to our error. Any item that is returned more than 30 days
              after delivery
            </p>
          </div>
          <div className="">
            <p className="text-xl md:text-3xl font-bold my-5">Refunds</p>
            <p className="text-sm">
              Once your return is received and inspected, we will send you an
              email to notify you that we have received your returned item. We
              will also notify you of the approval or rejection of your refund.{" "}
              <br />
              If you are approved, then your refund will be processed, and a
              credit will automatically be applied to your credit card or
              original method of payment, within a certain amount of days.
            </p>
          </div>
          <div className="">
            <p className="text-xl md:text-3xl font-bold my-5">
              Late or missing refunds
            </p>
            <p className="text-sm">
              If you haven’t received a refund yet, first check your bank
              account again. Then contact your credit card company, it may take
              some time before your refund is officially posted. Next contact
              your bank. There is often some processing time before a refund is
              posted. If you’ve done all of this and you still have not received
              your refund yet, please contact us at .
            </p>
          </div>
          <div className="">
            <p className="text-xl md:text-3xl font-bold my-5">Sale items</p>
            <p className="text-sm">
              Only regular priced items may be refunded. Sale items cannot be
              refunded.
            </p>
          </div>
          <div className="">
            <p className="text-xl md:text-3xl font-bold my-5">
              Shipping returns
            </p>
            <p className="text-sm">
              To return your product, you should mail your product to: "
              {"physical address"}" <br />
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are non-refundable. If you
              receive a refund, the cost of return shipping will be deducted
              from your refund. <br />
              Depending on where you live, the time it may take for your
              exchanged product to reach you may <vary className="br"></vary>
              If you are returning more expensive items, you may consider using
              a trackable shipping service or purchasing shipping insurance. We
              don’t guarantee that we will receive your returned item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
