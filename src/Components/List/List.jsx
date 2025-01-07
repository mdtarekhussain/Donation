const List = ({ list }) => {
  const { logo, category_name, availability } = list;
  return (
    // <div className=" bg-base-100 w-full p-5 shadow-xl ">
    //   <div>
    //     <img src={logo} alt="Shoes" />
    //   </div>
    //   <div className="">
    //     <h2 className="">{category_name}</h2>
    //     <p>{availability}</p>
    //   </div>
    // </div>
    <div className="card card-compact bg-base-100 w-full p-8 shadow-xl">
      <div>
        <img src={logo} alt="Shoes" />
      </div>

      <div className="mt-2">
        <h2 className="card-title">{category_name}</h2>
        <p className="card-title">{availability}</p>
      </div>
    </div>
  );
};

export default List;
