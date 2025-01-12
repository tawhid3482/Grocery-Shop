import img from "../../../assets/notification/img.png";
const Notification = () => {
  return (
    <div>
      <p className="text-center my-5 text-2xl font-bold">
        --Your Notification--
      </p>
      <div className="flex flex-col items-center gap-5">
        <img src={img} className="w-2/3 h-48" alt="" />
        <p className="text-lg font-medium"> No Notification Found</p>
      </div>
    </div>
  );
};

export default Notification;
