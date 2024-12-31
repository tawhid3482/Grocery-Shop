import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Coupon = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const couponCode = {
      code: data.code,
    };

    try {
      // Save the product to the database
      const response = await axiosSecure.post("/coupon", couponCode);
      if (response.data.insertedId) {
        reset();
        toast.success(`${data.code} added to the coupon list!`);
      } else {
        toast.error("Failed to add coupon. Please try again.");
      }
    } catch (error) {
      console.error("Error adding coupon:", error);
      toast.error("Error adding coupon. Please check your network connection.");
    }
  };

  return (
    <div className="dark:bg-slate-700 dark:text-black p-5">
      <Helmet>
        <title>Grocery-Shop | Add Coupon</title>
      </Helmet>
      <div>
        <p className="text-3xl font-bold text-center">Add Coupon</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                Coupon Code
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              {...register("code", { required: true })}
              className="input input-bordered w-full dark:bg-white dark:text-black"
            />
          </div>

          <div className="form-control w-full my-6 ">
            <button type="submit" className="btn bg-[#019267] text-white w-full">
              Add Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Coupon;
