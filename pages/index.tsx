import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 py-10 px-20 grid gap-10 min-h-screen ">
      <div className="bg-white p-5 rounded-2xl shadow-xl group">
        <span className="font-semibold text-xl">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between text-gray-400 odd:bg-slate-500 even:bg-red-400"
            >
              <span>Gray Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2  border-dashed border-t-2">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="group-hover:bg-red-400 transition-colors bg-blue-500 text-white text-center p-2 rounded-md mt-3 mx-auto w-1/2">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-5 pb-28">
          <span className="text-white text-lg">Profile</span>
        </div>
        <div className="relative -top-5  bg-white rounded-3xl p-5">
          <div className="flex justify-between items-end relative -top-24">
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-400">Orders</div>
              <div>340</div>
            </div>
            <div className="bg-red-300 relative left-3 p-16 shadow-lg rounded-full" />
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-400">Spent</div>
              <div>$23,500</div>
            </div>
          </div>
          <div className="flex flex-col -mt-20 -mb-5 items-center">
            <div>Tony Molloy</div>
            <div className="text-xs text-gray-400">New York, USA</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center">
          <span>&larr;</span>

          <div className="space-x-3">
            <span>⭐ 4.8</span>
            <span className="shadow-md p-1 rounded-md">❤️</span>
          </div>
        </div>
        <div />
        <div className="flex flex-col">
          <div className="h-72 bg-amber-500 my-2" />
          <span className="font-semibold text-lg -mb-1">Swoon Lounge</span>
          <span className="text-sm text-gray-400">Chair</span>

          <div className="flex justify-between items-center">
            <div className="space-x-1">
              <button className="w-4 h-4 bg-yellow-500 rounded-full ring-offset-1 focus:ring-2 ring-yellow-400 transition" />
              <button className="w-4 h-4 bg-lime-500 focus:ring-2 transition ring-lime-500 ring-offset-2 rounded-full" />
              <button className="w-4 h-4 bg-blue-500 rounded-full focus:ring-2 transition ring-offset-2 ring-blue-500" />
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-200 aspect-square flex items-center justify-center w-6 rounded-md">
                -
              </span>
              <span>1</span>
              <span className="bg-blue-200 aspect-square flex items-center justify-center w-6 rounded-md">
                +
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-2xl font-semibold"> $450</span>
            <span className=" bg-blue-400 px-6 py-2 text-xs text-center text-white rounded-md ">
              Add to Cart
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
