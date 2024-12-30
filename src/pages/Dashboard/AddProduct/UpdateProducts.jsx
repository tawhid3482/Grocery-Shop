import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`;

const UpdateProducts = () => {
  const item = useLoaderData();
  console.log(item);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.img[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const productItem = {
        id: Date.now().toString(),
        name: data.name,
        img: res.data.data.display_url,
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

      const menuRes = await axiosSecure.patch(
        `/products/${item._id}`,
        productItem
      );
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        toast.success(`${data.name} products updated `);
        navigate("/dashboard/manageProducts");
      }
    }
    
  };
  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Update Products</title>
      </Helmet>

      <div>
        <p className="text-3xl font-bold text-center">Update Your Products</p>
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
                defaultValue={item.name}
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
                defaultValue={item.category}
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
                defaultValue={item.oldPrice}
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
                defaultValue={item.newPrice}
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
                defaultValue={item.rating}
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
                defaultValue={item.featured}
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
                defaultValue={item.offer}
                placeholder="Offers percent"
                {...register("offer", { required: true })}
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
                defaultValue={item.stock_quantity}
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
                defaultValue={item.unit_of_measure}
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
                defaultValue={item.supplier?.name}
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
                defaultValue={item.supplier.contact_info.phone}
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
                defaultValue={item.supplier.contact_info.email}
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
                defaultValue={item.stock}
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
                defaultValue={item.brand}
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
              defaultValue={item.description}
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
