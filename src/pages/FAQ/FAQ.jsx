import { Helmet } from "react-helmet-async";
import EmailSubmit from "../Home/EmailSubmit/EmailSubmit";

const FAQ = () => {
  return (
    <div className="">
      <Helmet>
        <title>Grocery-Shop | FAQ</title>
      </Helmet>
      <div className="">
        <div
          className="h-48 w-full flex flex-col justify-center items-center text-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8W7yB8KOD-ESa8pLlD4j9Q9d57Pd8kuyQoQ&s')`,
          }}
        >
          <p className="text-xs bg-red-600 p-2 rounded-2xl text-white">FAQ</p>
          <p className="text-5xl font-semibold text-white">
            What you are wondering...
          </p>
          <p className="text-xs my-2 text-white ">
            Cardigan helvetica sriracha, portland celiac truffaut woke
          </p>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row p-5 gap-4 my-5">
          <div className="md:w-1/2">
            <div className="">
              <p className="text-xl md:text-3xl font-medium my-5 uppercase">
                Frequently Asked Questions (FAQ)
              </p>
              <p className="text-sm">
                Venenatis duis tristique accumsan netus enim in posuere torquent
                ut ullamcorper integer aliquam a mi curae elementum. Maecenas
                iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante
                a mollis habitant duis urna cum iaculis ullamcorper luctus.
                Venenatis duis tristique accumsan netus enim in posuere torquent
                ut ullamcorper integer aliquam a mi curae elementum.
              </p>
            </div>
            <div className="">
              <p className="text-xl md:text-3xl font-medium my-5">PAYMENT INFORMATION</p>
              <p className="text-sm">
                Venenatis duis tristique accumsan netus enim in posuere torquent
                ut ullamcorper integer aliquam a mi curae elementum. Maecenas
                iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante
                a mollis habitant duis urna cum iaculis ullamcorper luctus.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How long/days will delivery take?
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Venenatis duis tristique accumsan netus enim in posuere
                  torquent ut ullamcorper integer aliquam a mi curae elementum.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What exactly happens after ordering?
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Venenatis duis tristique accumsan netus enim in posuere
                  torquent ut ullamcorper integer aliquam a mi curae elementum.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Do I receive an invoice for my order?
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Venenatis duis tristique accumsan netus enim in posuere
                  torquent ut ullamcorper integer aliquam a mi curae elementum.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Delivery charges for orders from the Online Shop?
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Venenatis duis tristique accumsan netus enim in posuere
                  torquent ut ullamcorper integer aliquam a mi curae elementum.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <EmailSubmit></EmailSubmit>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
