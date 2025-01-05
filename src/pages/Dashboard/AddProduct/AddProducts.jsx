import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Upload the image
      const formData = new FormData();
      formData.append("image", data.img[0]);
      const imageResponse = await axiosPublic.post(imageHostingApi, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (imageResponse.data.success) {
        // Create the product object
        const productItem = {
          id: Date.now().toString(),
          name: data.name,
          img: imageResponse.data.data.display_url,
          oldPrice: parseFloat(data.oldPrice),
          newPrice: parseFloat(data.newPrice),
          category: data.category,
          rating: parseFloat(data.rating),
          stock: data.stock,
          description: data.description,
          featured: data.featured,
          offer: data.offer,
          stock_quantity: parseInt(data.stock_quantity),
          brand: data.brand,
          unit_of_measure: data.unit_of_measure,
          supplier: {
            name: data.supplierName,
            contact_info: {
              phone: data.supplierPhone,
              email: data.supplierEmail,
            },
          },
        };

        // Save the product to the database
        const response = await axiosSecure.post("/products", productItem);
        if (response.data.insertedId) {
          reset();
          toast.success(`${data.name} added to the product list!`);
        }
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add the product. Please try again.");
    }
  };

  return (
    <div className="dark:bg-slate-700 dark:text-white p-5">
      <Helmet>
        <title>Grocery-Shop | Add Product</title>
      </Helmet>
      <div>
        <p className="text-3xl font-bold text-center">Add Your Products</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Category
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="bakery">Bakery</option>
                <option value="fruits">Fruits</option>
                <option value="grocery">Grocery</option>
                <option value="prepared and deli">Prepared & Deli</option>
                <option value="seafood and meat">Seafood & Meat</option>
                <option value="vegetables">Vegetables</option>
                <option value="dried food">Dried Food</option>
                <option value="breakfast">Breakfast</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Old Price
                </span>
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Old Price"
                {...register("oldPrice", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  New Price
                </span>
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="New Price"
                {...register("newPrice", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Rating
                </span>
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Rating"
                {...register("rating", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Featured
                </span>
              </label>
              <select
                {...register("featured", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="best sale">Best Sale</option>
                <option value="top rated">Top Rated</option>
                <option value="on sale">On Sale</option>
                <option value="in stock">In Stock</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  offer
                </span>
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Offers percent"
                {...register("offer")}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Stock quantity
                </span>
              </label>
              <input
                type="number"
                step="0.1"
                placeholder=" stock_quantity"
                {...register("stock_quantity", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Unit of Measure
                </span>
              </label>
              <select
                {...register("unit_of_measure", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="kg">Kg</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Supplier Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Supplier Name"
                {...register("supplierName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Supplier Phone
                </span>
              </label>
              <input
                type="text"
                placeholder="Supplier Phone"
                {...register("supplierPhone", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Supplier Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Supplier Email"
                {...register("supplierEmail", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Stock
                </span>
              </label>
              <select
                {...register("stock", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="best sale">Stock Out</option>

                <option value="in stock">In Stock</option>
              </select>
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                  Brand Name
                </span>
              </label>
              <input
                type="text"
                placeholder=" brand"
                {...register("brand", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("description", { required: true })}
              placeholder="Description"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text dark:bg-slate-700 dark:text-slate-100">
                Product Image
              </span>
            </label>
            <input
              type="file"
              {...register("img", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
